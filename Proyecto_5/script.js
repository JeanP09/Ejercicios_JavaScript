let esqueleto = "off"; /*Variable que por defecto está en off*/
let esqueletoStop = document.getElementById("esqueletoQuieto"); /*Traigo el esqueleto cuando esté quieto y lo cambio por el que está bailando*/
let botonSonido = new Audio ("./sound/botonbailar.mp3");
let botonAudio = new Audio ("./sound/esqueletoNokia.mp3");

function bailar(){ /*función para activar el OnOff en el botón*/
    if(esqueleto=="off"){ /*Variable que revisa si mi esqueleto está en Off*/
        esqueleto="on";
        esqueletoStop.classList.add("on"); /*.add es el que trae la clase que está bailando*/
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.play();
        }) 
        console.log("On");
    } else {
        esqueleto = "off"
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.pause();
        }) 
        console.log("Off");
    }
} 
