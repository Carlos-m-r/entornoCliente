let inputName;
let inputPassword;

//Validaciones


//Usuario !vacio
do {
    inputName = prompt("Introduzca usuario");
    if(inputName === "" || inputName === null){
        alert("El nombre de usuario no puede estar vacío");
    }

    console.log(inputName);
} while (inputName === "" || inputName === null);


//password = MeGustaProgramar  Case sensitive
do {
    inputPassword = prompt("Introduzca contraseña");
    if(inputPassword !== "MeGustaProgramar"){
        alert("La contraseña no es correcta");
    }
} while (inputPassword !== "MeGustaProgramar");

alert("Información almacenada correctamente");


//CARLOS MARTEL RAPOSO 2ºDAW