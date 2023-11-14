function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date ();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

//console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GTM-0500'))

function cuentaRegresiva (tiempoFaltante, reloj, mensaje) {
    const e = document.getElementById(reloj);

    const tiempoActual = setInterval( () =>{
        let t = obtenerTiempoFaltante(tiempoFaltante);
        e.innerHTML = `${t.diasFaltantes}d:${t.horasFaltantes}h:${t.minutosFaltantes}m:${t.segundosFaltantes}s`;

        if(t.tiempoFaltante <1) {
            clearInterval(tiempoActual);
            e.innerHTML = mensaje;
        } 
    }, 1000)
};

cuentaRegresiva('Nov 14 2023 07:59:00 GMT-0500', 'cuentaRegresiva', '¡Feliz Navidad!'); {
    let papaNoel = "off";
    let papaNoelStop = document.getElementById("papaNoelQuieto");
    let cuentaRegresiva = new Audio ("./sound/allWant.mp3");

}