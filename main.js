// Declaración de variables de los botones
const botonAgrega = document.getElementById('superButton');                             // Se obtiene el botón de agregar
const botonReset = document.getElementById('resetButton');                              // Se obtiene el botón de reiniciar
const botonsuma = document.getElementById('sumatoria');                                 // Se obtiene el botón de sumatoria

// Ocultar botones
document.getElementById('resetButton').style.display = "none";                          // Se oculta el botón de reiniciar
document.getElementById('sumatoria').style.display = "none";                            // Se oculta el botón de sumatoria

// Declaración de variables
let numero = 0;
let suma = 0;

// Función para agregar números a la lista
function menu() {

    if (document.getElementById('inputNumber').value!=0) {                              // Se valida que el input no esté vacío
        numero = Number(document.getElementById('inputNumber').value);                  // Se obtiene el valor del input
        suma = suma + numero                                                            // Se suma el número introducido
        console.log(suma);                                                              // Se muestra en consola la suma
        const node = document.createElement("li");                                      // Se crea un elemento li
        const textnode = document.createTextNode("Numero introducido: " + numero);      // Se crea un nodo de texto
        node.appendChild(textnode);                                                     // Se añade el nodo de texto al elemento li
        document.getElementById("lista").appendChild(node);                             // Se añade el elemento li a la lista
        document.getElementById('inputNumber').value = "";                              // Se limpia el input
        document.getElementById('sumatoria').style.display = "block";                   // Se muestra el botón de sumatoria
    }else{
        alert("Introduce un número");                                                   // Se muestra un mensaje de alerta si el input está vacío
    }
}

// Función para reiniciar la lista
function reiniciar(evento){
    evento.preventDefault();                                                            // Se previene el comportamiento por defecto del botón
        document.getElementById('lista').innerHTML = "";                                // Se limpia la lista
        document.getElementsByClassName('texto')[0].innerHTML = "";                     // Se limpia el texto de la suma
        suma = 0;                                                                       // Se reinicia la suma
        document.getElementById('superButton').style.display = "block";                 // Se muestra el botón de agregar
        document.getElementById('resetButton').style.display = "none";                  // Se oculta el botón de reiniciar
    }    
    
// Función para sumar los números introducidos
function Sumar(){
        const etiqueta = document.getElementsByClassName('texto');                      // Se obtiene el elemento de la etiqueta
        etiqueta[0].innerHTML = "El resultado de la suma es: " + suma;                  // Se muestra el resultado de la suma
        document.getElementById('inputNumber').value = "";                              // Se limpia el input
        document.getElementById('superButton').style.display = "none";                  // Se oculta el botón de agregar
        document.getElementById('sumatoria').style.display = "none";                    // Se oculta el botón de sumatoria
        document.getElementById('resetButton').style.display = "block";                 // Se muestra el botón de reiniciar
    }

// Se crean los eventos para los botones de la página web
botonAgrega.addEventListener('click', menu);                                            // Se añade un evento al botón de agregar
botonReset.addEventListener('click', reiniciar);                                        // Se añade un evento al botón de reiniciar                     
botonsuma.addEventListener('click', Sumar);                                             // Se añade un evento al botón de sumatoria

