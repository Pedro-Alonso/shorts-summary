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

    var registerArea = document.getElementById("div")
    registerArea.setAttribute("id", "registerArea")
    registerArea.style.opacity = "0"

    var box = document.getElementById("registerBox")
    box.appendChild(registerArea)
}