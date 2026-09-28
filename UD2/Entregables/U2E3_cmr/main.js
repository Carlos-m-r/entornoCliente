//Generamos num aleatorio con valor entre 0 y 10;

let inputNumber;
let numberOfTries = 1;
let aleatorio = Math.floor(Math.random() * 10 + 1);

//Entramos en bucle para diversas validaciones del juego
do {
    inputNumber = prompt("¿Qué numero es?");

    console.log(inputNumber);


    //Si se pulsa el boton de cancelar salimos del bucle
    if (inputNumber === null) {
        alert("el juego se canceló");
        break;
    } else {

        //Si el valor no es numerico se notifica y volvemos a entrar
        if (isNaN(inputNumber)) {
            alert("el valor introducido no es numérico");
        }

        //Si el valor introducido es diferente del generado, notificamos si es mayor o menor, intentos+1 y volvemos a iterar
        if (inputNumber !== aleatorio) {
            numberOfTries++;

            isBigger = inputNumber > aleatorio ? " mayor " : " menor "

            alert("el número introducido es " + isBigger + "al generado");

        }

    }

} while (inputNumber !== aleatorio);


//Cuando se introduce el valor correcto salta mensaje con el valor que era y el número de intentos en los que se acertó
if (inputNumber === aleatorio) {
    alert("¡CORRECTO!, el número era " + aleatorio + "\nGanaste en " + numberOfTries + " intentos");
}


//CARLOS MARTEL RAPOSO 2ºDAW