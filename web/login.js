document.getElementById("logo").addEventListener("click", abrirLogin)

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms))
}

async function abrirLogin() {
  var logo = document.getElementById("logo")
  // logo.style.position = "absolute"
  // logo.style.marginBottom = "27rem"
  logo.style.cursor = "default"

  // var title = document.getElementById('title')
  // title.style.position = "absolute"
  // title.style.marginBottom = "20rem"

  var logoNtitle = document.getElementById("logoNtitle")
  logoNtitle.style.position = "absolute"
  logoNtitle.style.marginBottom = "27rem"

  var loginArea = document.createElement("div")
  loginArea.setAttribute("id", "loginArea")
  loginArea.style.opacity = "0"

  var form = document.createElement("form")
  form.setAttribute("id", "loginForm")

  var usernameLabel = document.createElement("label")
  usernameLabel.innerHTML = "Usuário:"
  usernameLabel.setAttribute("id", "usernameLabel")

  var username = document.createElement("input")
  username.setAttribute("type", "text")
  username.setAttribute("placeholder", "Insira aqui seu nome de usuário")
  username.setAttribute("id", "usernameBox")

  var passwordLabel = document.createElement("label")
  passwordLabel.innerHTML = "Senha:"
  passwordLabel.setAttribute("id", "passwordLabel")

  var password = document.createElement("input")
  password.setAttribute("type", "password")
  password.setAttribute("placeholder", "Insira sua senha aqui")
  password.setAttribute("id", "passwordBox")

  var forgot = document.createElement("a")
  forgot.setAttribute("id", "forgottenPass")
  forgot.href = "./main.html"
  forgot.innerHTML = "Esqueci minha senha"

  var box = document.getElementById("loginBox")
  box.appendChild(loginArea)
  loginArea.appendChild(form)
  form.appendChild(usernameLabel)
  form.appendChild(username)
  form.appendChild(passwordLabel)
  form.appendChild(password)
  form.appendChild(forgot)

  let espera2 = await delay(750)
  loginArea.style.opacity = "1"

  logo.removeEventListener("click", abrirLogin)
}