const botonAgrega = document.getElementById('superButton');
const botonReset = document.getElementById('resetButton');
const botonsuma = document.getElementById('sumatoria');

document.getElementById('resetButton').style.display = "none";
document.getElementById('sumatoria').style.display = "none";


let numero = 0;
let suma = 0;
function menu() {

    if (document.getElementById('inputNumber').value!=0) {    
        numero = Number(document.getElementById('inputNumber').value);
        suma = suma + numero
        console.log(suma);  
        const node = document.createElement("li");
        const textnode = document.createTextNode("Numero introducido: " + numero);
        node.appendChild(textnode);
        document.getElementById("lista").appendChild(node);
        document.getElementById('inputNumber').value = "";
        document.getElementById('sumatoria').style.display = "block";
    }else{
        alert("Introduce un número");
    }
}
function reiniciar(evento){
    evento.preventDefault();
        document.getElementById('lista').innerHTML = "";
        document.getElementsByClassName('texto')[0].innerHTML = "";
        suma = 0;
        document.getElementById('superButton').style.display = "block";
        document.getElementById('resetButton').style.display = "none";
        
    }

function Sumar(){

        const etiqueta = document.getElementsByClassName('texto');
        etiqueta[0].innerHTML = "El resultado de la suma de los número intoducidos es: " + suma;
        document.getElementById('inputNumber').value = "";
        document.getElementById('superButton').style.display = "none";
        document.getElementById('sumatoria').style.display = "none";
        document.getElementById('resetButton').style.display = "block";
    }


botonAgrega.addEventListener('click', menu);
botonReset.addEventListener('click', reiniciar);
botonsuma.addEventListener('click', Sumar);
