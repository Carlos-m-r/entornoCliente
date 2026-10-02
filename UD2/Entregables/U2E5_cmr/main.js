let numberOfDies = 0; //numero de dados que se van a lanzar entre 1 y 4
let resultString = '';

numberOfDies = prompt('Indique el número de dados que quiere lanzar(entre 1 y 4)');

if(numberOfDies == null) {
    alert('Programa cancelado');
} else {
    while(isNaN(numberOfDies) || numberOfDies <= 0 || numberOfDies > 4) {
        numberOfDies = prompt('El número seleccionado no está compendido entre 1 y 4, elija otro');
    }  
    for (let index = 0; index < numberOfDies; index++) {
        let dieValue = Math.floor(Math.random() * 6) +1;
        resultString += 'Dado ' + Number(index+1) + ':  ' + dieValue;
        if(index < numberOfDies -1 ) {
            resultString += ' - ';
        }
    }
    alert(resultString);
}