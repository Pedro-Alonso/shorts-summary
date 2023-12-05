document.getElementById("logo").addEventListener("click", abrirLogin)

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms))
}

var map = L.map("map").setView([-22.1208901, -51.4084913], 18)

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map)

async function abrirLogin() {
  var logo = document.getElementById("logo")
  logo.style.cursor = "default"

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

  var subtexts = document.createElement("div")
  subtexts.setAttribute("id", "subtexts")

  var forgot = document.createElement("a")
  forgot.setAttribute("id", "forgottenPass")
  forgot.href = "./passreset.html"
  forgot.innerHTML = "Esqueci minha senha"

  var register = document.createElement("a")
  register.setAttribute("id", "createAccount")
  register.href = "./signup.html"
  register.innerHTML = "Registrar-se"

  var enterButton = document.createElement("button")
  enterButton.setAttribute("id", "enterButton")
  enterButton.setAttribute("type", "button")
  enterButton.innerHTML = "Entrar"
  enterButton.setAttribute("type", "button")
  enterButton.onclick = function () {
    if (username.value != '' && password.value != '') window.location.href = "./main.html"
    else alert('Favor, preencher todos os campos acima.')
  }

  var box = document.getElementById("loginBox")
  box.appendChild(loginArea)
  loginArea.appendChild(form)
  form.appendChild(usernameLabel)
  form.appendChild(username)
  form.appendChild(passwordLabel)
  form.appendChild(password)
  form.appendChild(subtexts)
  subtexts.appendChild(register)
  subtexts.appendChild(forgot)
  form.appendChild(enterButton)

  let espera2 = await delay(750)
  loginArea.style.opacity = "1"

  logo.removeEventListener("click", abrirLogin)
}

function intoMain() {
  document.getElementById("enterButton").action = window.location.href =
    "./main.html"
}
