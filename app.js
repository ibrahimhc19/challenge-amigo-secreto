// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
const textRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
let nombre = document.querySelector(".input-name");
let lista = document.querySelector(".name-list");

function agregarAmigo() {
  if (!nombre || !textRegex.test(nombre.value)) {
    alert("Por favor, inserte un nombre.");
  } else {
    arrayAmigos.push(nombre.value.trim());
    let item = document.createElement("LI");
    item.innerHTML = `${arrayAmigos.length}. ${nombre.value.trim()}`;
    lista.appendChild(item);
    nombre.value = "";
  }
}

function sortearAmigo() {
  if (arrayAmigos.length != 0 && arrayAmigos.length >= 3) {
    let rand = Math.floor(Math.random() * arrayAmigos.length);
    lista.textContent = `El amigo secreto sorteado es: ${arrayAmigos[rand]}`;
  } else {
    alert("Por favor, inserte por lo menos 3 nombres a sortear.");
  }
}


function reset(){
    arrayAmigos = [];
    lista.textContent = "";
    nombre.value = "";
}