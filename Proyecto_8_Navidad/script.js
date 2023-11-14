let sonidoEstado = "off";
let papaNoelStop = document.getElementById("imagenQuieta");
let botonPlay = document.getElementById("sonidoOn")
let botonStop = document.getElementById("sonidoOff")
let audio = new Audio("sound/navidad.mp3");

function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000)/1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);
    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    };

    

}


console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'))


function cuentaRegresiva(tiempoFaltante, reloj, mensaje) {

    const dias = document.getElementById('dias')
    const horas = document.getElementById('horas')
    const minutos = document.getElementById('minutos')
    const segundos = document.getElementById('segundos')

    const e = document.getElementById(reloj);

    const tiempoActual = setInterval( () =>{
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = `${t.diasFaltantes}`;
        horas.innerHTML = `${t.horasFaltantes}`
        minutos.innerHTML = `${t.minutosFaltantes}`
        segundos.innerHTML = `${t.segundosFaltantes}`

        if (t.tiempoFaltante<1) {
            clearInterval(tiempoActual);
            e.innerHTML = mensaje;
            papaNoelStop.classList.add("on");
            
            dias.innerHTML = `00`;
            horas.innerHTML = `00`
            minutos.innerHTML = `00`
            segundos.innerHTML = `00`
            botonPlay.classList.add("red")
            botonStop.classList.add("red")
            
        }


    },1000)
    
};


function empezar(){
    console.log("a")
    if (sonidoEstado == "off") {
        sonidoEstado = "on";
        console.log("On");
    } 
}

botonPlay.addEventListener('click', ()=>{
    empezar();
    audio.play();
});


function detener(){ 
    console.log("a")
    if (sonidoEstado == "on") {
        sonidoEstado = "off";
        console.log("On");
    } 
}

botonStop.addEventListener('click', ()=>{
    detener();
    audio.pause();
})


cuentaRegresiva('Nov 14 2023 11:52:30 GMT-0500', 'mensaje', '¡Feliz Navidad!')