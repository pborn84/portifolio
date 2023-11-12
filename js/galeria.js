const gM = document.querySelector(".gModal")
const imgM = document.querySelector(".gModal img")

function fecharGaleria(){
    gM.style.visibility= "hidden"
}
function abrirGaleria(src){
    gM.style.visibility = "visible"
    imgM.style.transform = "scale(1)"
    imgM.src = src
}
