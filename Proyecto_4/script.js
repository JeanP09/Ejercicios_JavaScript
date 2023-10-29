let formato24 = true; // Esta variable deja el comienzo en formato de 24 horas

function cambiarFormato() {
    formato24 = !formato24; // Esta función cambien el estado del formato al contrario que es 12 horas
}

function calcularTiempo() {
    let tiempo = new Date(); //Date captura la hora que tenga localmente el sistema, se captura para guardarla en una variable y desglosarla para mostrarla como queremos

    //Defino tres variables para separar la hora, el minuto y el segundo
    let hh = tiempo.getHours(); //getHours retorna la hora de la fecha especificada, de acuerdo a la hora local
    let mm = tiempo.getMinutes(); //getMinutes devuelve los minutos de la fecha especificada en función de la hora local
    let ss = tiempo.getSeconds(); //getSeconds devuelve los segundos en la fecha especificada de acuerdo a la hora local
    let amPm = '';

    if (!formato24) {
        amPm = hh >= 12 ? 'p.m.' : 'a.m.'; //Establece el valor de amPm en 'p.m.' si la hora es igual o mayor a 12, y en 'a.m.' si la hora es menor que 12.
        hh = hh % 12 || 12; //Si formato24 es falso
    }
    
    //Establesco y reasigno valores a mis variables hora, minuto y segundo
    hh = hh < 10 ? "0" + hh : hh; //Si la hora es inferior a 10, suma un 0 al lado izquierdo
    mm = mm < 10 ? "0" + mm : mm; //Si el minuto es inferior a 10, suma un 0 al lado izquierdo
    ss = ss < 10 ? "0" + ss : ss; //Si el segundo es inferior a 10, suma un 0 al lado izquierdo
    
    let pantallaReloj = hh + ":" + mm + ":" + ss + ' ' + amPm; //Se utiliza para construir una cadena de tiempo que incluye horas, minutos, segundos y AM o PM según el formato de 12 horas
    let relojDigital = document.querySelector(".reloj1"); //querySelector guardo mi reloj //.reloj es la clase que cree en el index
    //Element.innerHTML puedo devolver o establecer la sintaxis de HTML para poder insertar el reloj
    relojDigital.innerHTML = pantallaReloj; //innerHTML lo inserto para que la información sea enviada a mi pantalla de reloj
}


setInterval(calcularTiempo, 1000); //Llamo a la función calcularTiempo con el método setInterval, con esta función llamo a mi función calcularTiempo y le pido que se actualice cada 1000milisegundos = 1segundo


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
