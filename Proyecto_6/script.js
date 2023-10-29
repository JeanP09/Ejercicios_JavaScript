const marcoPuntaje = document.querySelector('.puntaje'); //Se crea constante del marco de puntaje y se trae la clase del puntaje
let puntajeActual = 0;
const puntajeLimite = 5;

//Construir las clases adicionales por cada estrella, se hacen con un Mapeo HTMl. Se construye un arreglo a partir de un arreglo de puntajeLimite
const html = Array.from(Array(puntajeLimite)).map((item, i) =>{//.map para dibujar en el HTML y que tenga en cuenta la posición que es i
    return `<div class="item item-${i}" data-pos="${i}"></div>`; //despues del .map me devuelve un div class y construye en el HTML una división según el puntaje límite que es 5, constuye 5 divisones para cada estrella //guarda el nombre de la clase que crea y tambien su posición
});
marcoPuntaje.innerHTML = html.join(''); //Integra todo en el HTML

//Creo un document querySelectoAll para traer todo lo que este en la clase item y que le recorra
document.querySelectorAll(".item").forEach(item =>{ //addEventListener para escuchar cuando el mouse esté encima de la zona item
    item.addEventListener("mouseover", e => {
        //console.log("Funciona");
        const posicion = item.getAttribute("data-pos") //creo una constante de la posición que traiga el event-listener y capture la posición

        //Si el puntaje actual es igual a la posición +1 retorne para que se optimice y se actualice a la última posición
        if (puntajeActual === parseInt(posicion) + 1){
            return
        }

        //Trae el .item para recorrerlo y si el cuadrado está en definido, se remueve al que está por defecto
        document.querySelectorAll(".item").forEach(cuadraditoDef => {
            if (cuadraditoDef.classList.contains("selec")){
                cuadraditoDef.classList.remove("selec")
            }
        });

        //Creo un for que depende de la posición y su límite es la posición y aumenta de 1-1
        for (let i = 0; i <= posicion; i++){
            const cuadradito = document.querySelector(`.item-${i}`); //La constante cuadradito guardo el indice de mi ítem=0,1,2,3,4
            if (!cuadradito.classList.contains("selec")){ //Se valida si paso el mouse encima está diferente a mi clase selec y no la encuentra la clase por ningún lado entonces la agrega:
                cuadradito.classList.add("selec"); //Si el cuadro está en el color predeterminado, pone el color que puse, me cambia item por selec
            }
        }
        puntajeActual = parseInt(posicion) + 1; //EL puntaje actual se actualice según la posicón
    });
    
    item.addEventListener("click", e => {
        const posicion = item.getAttribute("data-pos") //creo una constante de la posición que traiga el event-listener y capture la posición
        puntajeActual = parseInt(posicion) + 1;
        console.log(puntajeActual)    
    });        

});