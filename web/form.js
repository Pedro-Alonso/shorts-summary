import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  content.classList.add("placeholder")

  const videoURL = input.value

  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse vídeo não é um short")
  }

  const [_, params] = videoURL.split("/shorts/")
  const [videoID] = params.split("?si")

  content.textContent = "Recebendo o texto do áudio ..."

  const transcription = await server.get("/summary/" + videoID)

  content.textContent = "Processando o resumo ..."

  const summary = await server.post("/summary", {
    text: transcription.data.result,
  })

  content.textContent = transcription.data.result

  content.classList.remove("placeholder")
})

var source = document.getElementById("url")
source.addEventListener('focus', videoThumbnail)
source.addEventListener('blur', videoThumbnail)

function videoThumbnail() {
  var frame = document.getElementById('videoFrame')
  let newSource = (source.value).toString()
  newSource = newSource.replace("shorts", "embed")
  console.log(newSource)
  frame.setAttribute('src', newSource)

}