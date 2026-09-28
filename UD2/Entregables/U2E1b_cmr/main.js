
let inputName;
let inputAge;

//solicitamos nombre y edad
inputName = prompt("¿Cómo te llamas?");
inputAge = prompt("¿Qué edad tienes?");


//Variable para guardar una cadena u otra en funcion de la edad
let ageValidation = parseInt(inputAge) >= 18 ? "mayor de edad " : "menor de edad ";



//alert con formato de impresión
alert("Hola " + inputName + "\n Eres " + ageValidation + "y has vivido " + parseInt(inputAge)*365 + " días");
    

//CARLOS MARTEL RAPOSO 2ºDAW