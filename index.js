const prateado = document.querySelector(".prateado")
const dourado = document.querySelector(".dourado")
const grafite = document.querySelector(".grafite")
const azul = document.querySelector(".azul")
const fotos = document.querySelector(".container__fotos")
const arr = [prateado, dourado, azul, grafite]
const arrString = ["prateado", "dourado", "azul", "grafite"]

prateado.addEventListener("click", (evento) => {

    arr.forEach((envent) => {
        envent.classList.remove("borderMudar")

        arrString.forEach((e) => {
            fotos.classList.remove(e)
        })
    })
    fotos.classList.add("prateado")
    evento.target.classList.add("borderMudar")

})

dourado.addEventListener("click", (evento) => {
    arr.forEach((envent) => {
        envent.classList.remove("borderMudar")

        arrString.forEach((e) => {
            fotos.classList.remove(e)
        })
    })

    fotos.classList.add("dourado")
    evento.target.classList.add("borderMudar")
})

grafite.addEventListener("click", (evento) => {
    arr.forEach((envent) => {
        envent.classList.remove("borderMudar")

        arrString.forEach((e) => {
            fotos.classList.remove(e)
        })
    })

    fotos.classList.add("grafite")
    evento.target.classList.add("borderMudar")
})

azul.addEventListener("click", (evento) => {
    arr.forEach((envent) => {
        envent.classList.remove("borderMudar")

        arrString.forEach((e) => {
            fotos.classList.remove(e)
        })
    })

    fotos.classList.add("azul")
    evento.target.classList.add("borderMudar")
})