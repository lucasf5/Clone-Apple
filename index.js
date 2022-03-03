const prateado = document.querySelector(".prateado")
const dourado = document.querySelector(".dourado")
const grafite = document.querySelector(".grafite")
const azul = document.querySelector(".azul")
const fotos = document.querySelector(".container__fotos")
const arr = [prateado, dourado, azul, grafite]

prateado.addEventListener("click", (evento) => {
    fotos.classList.remove("dourado")
    fotos.classList.remove("grafite")
    fotos.classList.remove("azul")
    fotos.classList.add("prateado")
    arr.forEach((envent) => {
        envent.classList.remove("borderMudar")
    })
    evento.target.classList.add("borderMudar")

})
dourado.addEventListener("click", (evento) => {
    fotos.classList.remove("prateado")
    fotos.classList.remove("grafite")
    fotos.classList.remove("azul")
    fotos.classList.add("dourado")
    arr.forEach((envent) => {
        envent.classList.remove("borderMudar")
    })
    evento.target.classList.add("borderMudar")
})
grafite.addEventListener("click", (evento) => {
    fotos.classList.remove("dourado")
    fotos.classList.remove("prateado")
    fotos.classList.remove("azul")
    fotos.classList.add("grafite")
    arr.forEach((envent) => {
        envent.classList.remove("borderMudar")
    })
    evento.target.classList.add("borderMudar")
})
azul.addEventListener("click", (evento) => {
    fotos.classList.remove("dourado")
    fotos.classList.remove("grafite")
    fotos.classList.remove("prateado")
    fotos.classList.add("azul")
    arr.forEach((envent) => {
        envent.classList.remove("borderMudar")
    })
    evento.target.classList.add("borderMudar")
})