let veggies = ['Pimiento','Tofu'];
let notVeggies = ['Pepperoni','Jamón','Salmón'];
let validResponse = false;
let response = null;
let typeSelected = '';
let ingredientSelected = '';

do {
    response = prompt('Bienvenido a Bella Napoli. ¿Desea una pizza vegetariana?(responda "Si" o "No")');
    if (response != null && response == 'Si' || response == 'No'){
        validResponse = true;
        if(response == 'Si'){
            typeSelected = 'vegetariana';
            ingredientSelected = ingredientSelection(veggies);
        } else { 
            typeSelected = 'no vegetariana';
            ingredientSelected = ingredientSelection(notVeggies);
        }
        alert('La pizza elegida es ' + typeSelected + ', incluye: Mozzarella, Tomate y ' + ingredientSelected + '.');
    }   
} while (!validResponse);

function ingredientSelection(ingredients) {
    let selectedIngredient;
    do {
    let promptString = 'Los ingredientes disponibles son: ';

    ingredients.forEach(ingredient => {
        if(ingredients[-1]){
            promptString += ingredient + '.'
        }else {
            promptString += ingredient + ', '
        }
    });
    promptString += '. Elija uno.'
    selectedIngredient = prompt(promptString);
    } while (!ingredients.includes(selectedIngredient));
    return selectedIngredient;
}



//CARLOS MARTEL RAPOSO 2ºDAW