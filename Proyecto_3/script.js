//30° cada hora
//6° cada minuto
//6° cada segundo
const deg = 6; //Constante de 6° para usarlas en los minutos y segundos

const horas = document.querySelector('.hora'); //Constante horas que guarde en un arreglo lo que está en la clase hora del HTML
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(()=>{ //setInterval hace que el reloj de la impresión de que está moviendose y actulizando
    let tiempo = new Date(); //Captura la fecha y hora actual de mi equipo (sistema)

    let hh = tiempo.getHours() * 30; //Extrae las horas del sistema
    let mm = tiempo.getMinutes() * deg; //Extrae los minutos del sistema y multiplique por mis grados que son 6 en la constante que ya cree, se se actualiza cada 6 grados
    let ss = tiempo.getSeconds() * deg; //Extrae los segundos del sistema ↑

    horas.style.transform = `rotate(${(hh)+(mm/12)}deg)`; //Traigo mi constante horas, trae en un querySelector todo lo que sucede en horas y trae el estilo también
    //Transform es la propiedad que me permite que giren las manecillas, rotate indica que tiene que girar trayendo las horas+minutos/12 y que tenga en cuenta los grados
    minutos.style.transform = `rotate(${mm}deg)`; //Trae los minutos y que tenga en cuenta la actulización de los minutos
    segundos.style.transform = `rotate(${ss}deg)`; //Trae los segundos y que tenga en cuenta la actulización de los segundos
})