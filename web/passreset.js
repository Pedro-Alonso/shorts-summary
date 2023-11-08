window.addEventListener("load", passwordReset)

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms))
}

async function passwordReset() {
  window.removeEventListener("load", passwordReset)

  var logo = document.getElementById("logo")

  var logoNtitle = document.getElementById("logoNtitle")
  logoNtitle.style.position = "absolute"
  logoNtitle.style.marginBottom = "27rem"

  var passResetArea = document.createElement("div")
  passResetArea.setAttribute("id", "passResetArea")
  passResetArea.style.opacity = "0"

  var instructions = document.createElement("p")
  instructions.setAttribute("id", "instructions")
  instructions.innerHTML = `Insira seu e-mail cadastrado abaixo, nós enviaremos um código de uso único. Copie e cole o código no campo abaixo para redefinir sua senha.`

  var form = document.createElement("form")
  form.setAttribute("id", "resetForm")

  var emailLabel = document.createElement("label")
  emailLabel.innerHTML = "E-mail:"
  emailLabel.setAttribute("id", "emailLabel")

  var email = document.createElement("input")
  email.setAttribute("type", "email")
  email.setAttribute("placeholder", "Insira aqui seu e-mail cadastrado")
  email.setAttribute("id", "emailBox")

  var send = document.createElement("button")
  send.setAttribute("id", "sendCodeButton")
  send.innerHTML = "Enviar código"
  send.addEventListener("click", sendToEmail)
  send.setAttribute("type", "button")

  var box = document.getElementById("resetBox")
  box.appendChild(passResetArea)
  passResetArea.appendChild(instructions)
  passResetArea.appendChild(form)
  form.appendChild(emailLabel)
  form.appendChild(email)
  form.appendChild(send)

  let espera2 = await delay(750)
  passResetArea.style.opacity = "1"
}

function sendToEmail() {
  var emailLabel = document.getElementById("emailLabel")
  var email = document.getElementById("emailBox")
  var form = document.getElementById("resetForm")
  var sendButton = document.getElementById("sendCodeButton")
  var compWar = document.getElementById("compWarning")

  if (email.value != "") {
    instructions.remove()

    email.remove()
    emailLabel.remove()
    sendButton.remove()
    if (compWar != null) compWar.remove()

    var codeLabel = document.createElement("label")
    codeLabel.innerHTML = "Código:"
    codeLabel.setAttribute("id", "codeLabel")

    var code = document.createElement("input")
    code.setAttribute("type", "text")
    code.setAttribute("placeholder", "Insira o código enviado por email")
    code.setAttribute("id", "codeBox")

    form.appendChild(codeLabel)
    form.appendChild(code)
    form.appendChild(sendButton)
    sendButton.removeEventListener("click", sendToEmail)
    sendButton.addEventListener("click", codeSent)
  } else {
    if (compWar === null) showCompletionError()
  }
}

async function showCompletionError() {
  var form = document.getElementById("resetForm")
  var warning = document.createElement("p")

  warning.innerHTML = "Por favor, preencha todos os campos acima."
  warning.setAttribute("id", "compWarning")
  let espera2 = await delay(1)

  form.appendChild(warning)
  warning.style.opacity = "1"
}

async function showValidationError() {
  var form = document.getElementById("resetForm")
  var warning = document.createElement("p")

  warning.innerHTML =
    "Senha inválida. Necessita conter entre 6 e 20 caracteres, com pelo menos:<br>Um número<br>Uma letra maiúscula<br>Uma letra minúscula"
  warning.setAttribute("id", "valWarning")
  let espera2 = await delay(1)

  form.appendChild(warning)
  warning.style.opacity = "1"
}

async function showSimilarityError() {
  var form = document.getElementById("resetForm")
  var warning = document.createElement("p")

  warning.innerHTML = "As senhas precisam ser iguais"
  warning.setAttribute("id", "simWarning")
  let espera2 = await delay(1)

  form.appendChild(warning)
  warning.style.opacity = "1"
}

function codeSent() {
  var codeLabel = document.getElementById("codeLabel")
  var code = document.getElementById("codeBox")
  var sendButton = document.getElementById("sendCodeButton")
  var compWar = document.getElementById("compWarning")

  if (code.value != "") {
    code.remove()
    codeLabel.remove()
    sendButton.remove()
    if (compWar != null) compWar.remove()

    resetPassord()
  } else {
    if (compWar == null) showCompletionError()
  }
}

function resetPassord() {
  var form = document.getElementById("resetForm")

  var newPassLabel = document.createElement("label")
  newPassLabel.innerHTML = "Nova senha:"
  newPassLabel.setAttribute("id", "newPassLabel")

  var newPass = document.createElement("input")
  newPass.setAttribute("type", "password")
  newPass.setAttribute("placeholder", "Insira sua nova senha aqui")
  newPass.setAttribute("id", "newPassBox")

  var newPass2Label = document.createElement("label")
  newPass2Label.innerHTML = "Insira novamente a nova senha:"
  newPass2Label.setAttribute("id", "newPass2Label")

  var newPass2 = document.createElement("input")
  newPass2.setAttribute("type", "password")
  newPass2.setAttribute("placeholder", "Insira novamente a nova senha aqui")
  newPass2.setAttribute("id", "newPass2Box")

  var changePass = document.createElement("button")
  changePass.setAttribute("type", "button")
  changePass.setAttribute("id", "changePassButton")
  changePass.innerHTML = "Trocar senha"

  form.appendChild(newPassLabel)
  form.appendChild(newPass)
  form.appendChild(newPass2Label)
  form.appendChild(newPass2)
  form.appendChild(changePass)

  newPass.addEventListener("blur", passCheck)
  newPass2.addEventListener("blur", passCheck)
  changePass.addEventListener("click", passSent)
}

let passwordValidation = false

function passCheck() {
  console.log("Função chamada")
  var pass1 = document.getElementById("newPassBox")
  var pass2 = document.getElementById("newPass2Box")
  var valWar = document.getElementById("valWarning")
  var simWar = document.getElementById("simWarning")
  var compWar = document.getElementById("compWarning")

  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

  if (pass1.value == "" || pass2.value == "") {
    if (compWar === null) showCompletionError()
    passwordValidation = false
  } else {
    if (compWar != null) compWar.remove()
    passwordValidation = true
  }

  if (pass1.value.match(passw) && pass1.value != "") {
    console.log("Senha válida")
    if (valWar != null) valWar.remove()
    passwordValidation = true
  } else {
    if (simWar != null) simWar.remove()
    if (valWar == null) showValidationError()
    passwordValidation = false
    console.log(
      "Senha inválida. Necessita conter entre 6 e 20 caracteres, com pelo menos:\nUm número\nUma letra maiúscula\nUma letra minúscula"
    )
  }

  if (pass1.value != "" && pass2.value != "") {
    if (pass1.value != pass2.value) {
      if (simWar == null) showSimilarityError()
      console.log("Senhas diferentes")
      passwordValidation = false
    } else {
      if (simWar != null) simWar.remove()
      console.log("Senhas Iguais")
      passwordValidation = true
    }
  }
}

function passSent() {
  var pass1 = document.getElementById("newPassBox")
  var pass2 = document.getElementById("newPass2Box")

  if (pass1.value != '' && pass2.value != '' && passwordValidation) {
    alert('Senha alterada com sucesso!')
    document.location.href = "http://localhost:5173/index.html"
  } else {
    alert('Por favor, corrija os campos acima.')
  }


}
