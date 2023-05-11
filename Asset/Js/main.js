console.log("--------------DESDE AQUI main.js-------------------------")

//inportar funcion desde el modulo utils.js

import{
    doblar, //nombre del metodo
    nombre //nombre en utils



}from"./utils.js";  // donde esta el metodo


import * as utils from"./utils.js";  // asi llamo a todo lo que incluye el archivo

console.log("AQUIIII")
console.log(doblar(4));  //Resultado de dobrar 4 en consola
console.log(nombre);  // Resultado de nombre alex de utils en la consola

console.log(utils.doblar(4));  //Resultado de dobrar 4 en consola
console.log(utils.nombre);  // Resultado de nombre alex de utils en la consola


import{
        default as func
}from"./utils.js"; //forma de importar con el default