window.addEventListener("load", signUp)

const delay = (delayInMs) => {
    return new Promise((resolve) => setTimeout(resolve, delayInMs))
}

async function signUp(){
    window.removeEventListener("load", signUp)
    
    var logo = document.getElementById("logo")
    logo.style.cursor = "default"

    var logoNtitle = document.getElementById("logoNtitle")
    logoNtitle.style.position = "absolute"
    logoNtitle.style.marginBottom = "27rem"

    var registerArea = document.createElement("div")
    registerArea.setAttribute("id", "registerArea")
    registerArea.style.opacity = "0"

    var form = document.createElement("form")
    form.setAttribute("id", "registerForm")

    var namesBox = document.createElement("namesBox")
    namesBox.setAttribute("id", "namesBox")

    var firstNameLabel = document.createElement("label")
    firstNameLabel.setAttribute("id", "firstNameLabel")
    firstNameLabel.innerHTML = "Nome:"

    var secondNameLabel = document.createElement("label")
    secondNameLabel.setAttribute("id", "secondNameLabel")
    secondNameLabel.innerHTML = "Sobrenome:"
    
    var firstName = document.createElement("input")
    firstName.setAttribute("id", "firstName")
    firstName.setAttribute("type", "text")
    firstName.setAttribute("placeholder", "Primeiro nome")

    var secondName = document.createElement("input")
    secondName.setAttribute("id", "secondName")
    secondName.setAttribute("type", "text")
    secondName.setAttribute("placeholder", "Sobrenome")

    var emailLabel = document.createElement("label")
    emailLabel.setAttribute("id", "emailLabel")
    emailLabel.innerHTML = "Email: "

    var email = document.createElement("input")
    email.setAttribute("id", "email")
    email.setAttribute("type", "text")
    email.setAttribute("placeholder", "InsiraAquiSeu@Email.com")

    var passwordLabel = document.createElement("label")
    passwordLabel.setAttribute("id", "passwordLabel")
    passwordLabel.innerHTML = "Senha: "

    var password = document.createElement("input")
    password.setAttribute("id", "password")
    password.setAttribute("type", "password")
    password.setAttribute("placeholder", "Digite a sua senha")

    var confirmPasswordLabel = document.createElement("label")
    confirmPasswordLabel.setAttribute("id", "confirmPasswordLabel")
    confirmPasswordLabel.innerHTML = "Confirme sua senha: "

    var confirmPassword = document.createElement("input")
    confirmPassword.setAttribute("id", "confirmPassword")
    confirmPassword.setAttribute("type", "password")
    confirmPassword.setAttribute("placeholder", "Digite a sua senha novamente")

    var loginButton = document.createElement("button");
    loginButton.setAttribute("id", "loginButton")
    loginButton.setAttribute("type", "button")
    loginButton.innerHTML = 'Criar conta';
    loginButton.addEventListener("click", verifySignUp)

    var box = document.getElementById("registerBox")
    box.appendChild(registerArea)
    registerArea.appendChild(namesBox)
    registerArea.appendChild(form)
    namesBox.appendChild(firstNameLabel)
    form.appendChild(firstName)
    namesBox.appendChild(secondNameLabel)
    form.appendChild(secondName)
    form.appendChild(emailLabel)
    form.appendChild(email)
    form.appendChild(passwordLabel)
    form.appendChild(password)
    form.appendChild(confirmPasswordLabel)
    form.appendChild(confirmPassword)
    form.appendChild(loginButton)
    
    let espera2 = await delay(750)
    registerArea.style.opacity = "1"
}

function verifySignUp(){
    var firstNameValue = document.getElementById("firstName").value;
    var secondNameValue = document.getElementById("secondName").value;
    var emailValue = document.getElementById("email").value;
    var passwordValue = document.getElementById("password").value;
    var confirmPasswordValue = document.getElementById("confirmPassword").value;
    // pega todos os valores dos inputs
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // verifica se o email digitado é do tipo ____@____.____

    if(firstNameValue === "" || secondNameValue === "" || emailValue === "" || passwordValue === "" || confirmPasswordValue === ""){
        alert("Por favor, preencha todos os campos.");
    }else{
        if(!emailRegex.test(emailValue)){ // essa função verifica se emailValue tem o padrão pedido em emailRegex e retorna true caso verdadeiro, mas por causa do "!", ele inverte o resultado
            alert("Por favor, insira um email válido.");
        }else{
            if(passwordValue !== confirmPasswordValue){
                alert("As senhas não coincidem. Por favor, insira senhas iguais.");
            }else{
                alert("Cadastro bem-sucedido!");
                document.location.href = "http://localhost:5173/index.html";
            }
        }
    }
}