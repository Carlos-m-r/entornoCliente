
let totalStudents;
let sumResults = 0;


//Solicitamos el número total de valores que vamos a introducir posteriormente para calcular
do {
    numStudents = prompt("¿Cuantos alumnos hay?(introduzca un valor numérico)");

    if (!Number(numStudents)) {
        alert("El valor introducido no es numérico");
    } else {
        //
        totalStudents = parseInt(numStudents);
    }

} while (!Number(numStudents));


//Por cada alumno solicitamos la nota, validamos que sea un valor correcto 
// y añadimos esa nota al sumatorio total para sacar la media
for (let index = 0; index < numStudents; index++) {
    do {
        studentResult = prompt("introduzca la nota del alumno " + index);

        if (!Number(studentResult)) {
            alert("El valor introducido no es numérico");
        } else {
            sumResults += parseFloat(studentResult);
        }

    } while (!Number(studentResult));

}

console.log('totalStudents: ' + totalStudents);
console.log('sumNota: ' + sumResults);

//Imprimimos por consola 
console.log("Nota media: " + sumResults/totalStudents);



//CARLOS MARTEL RAPOSO 2ºDAW