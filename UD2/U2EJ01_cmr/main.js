
//Declara una variable llamada dato sin asignarle ningún valor.
let dato;
//Muestra el valor de la variable mediante alert()
alert(dato);
//Solicita al usuario que introduzca un valor mediante prompt() y almacénalo en la variable dato.
dato = prompt('introduzca un valor')
/*
Muestra por consola:

    El valor introducido.
    El tipo de dato obtenido mediante typeof.
*/
console.log(dato);
console.log(typeof(dato));
/*
Convierte el contenido de dato utilizando:

    Number()
    parseFloat()

Muestra mediante alert() el resultado obtenido con cada una de las dos conversiones
*/
alert(Number(dato) + " con Number");
alert(parseFloat(dato) + " con parseFloat");


/**

Asigna el valor null a la variable dato.
Muestra por consola el valor final de la variable.
 */

dato = null;

console.log(dato);