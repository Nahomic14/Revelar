function encriptMessage() {
  const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var mensajeInicial1 = document.getElementById("mensajeInicial1").value;
  var resultado1 = document.getElementById("resultado1");

  let nuevoMensaje = "";
  for (let i = 0; i < mensajeInicial1.length; i++) {
    let caracter = mensajeInicial1[i];
    let index = alfabeto.indexOf(caracter.toLowerCase());  // Convertir a minúscula para hacer la búsqueda
    if (index !== -1) {  // Comprueba si el caracter existe en el alfabeto
      let newIndex = (index + 5) % alfabeto.length;
      let newCaracter = alfabeto[newIndex];
      // Mantener el caso original del caracter
      if (caracter === caracter.toUpperCase()) {
        newCaracter = newCaracter.toUpperCase();
      }
      nuevoMensaje += newCaracter;
    } else {
      nuevoMensaje += caracter;  // Mantener los caracteres no presentes en el alfabeto
    }
  }
  resultado1.value = nuevoMensaje;
}

function decryptMessage() {
  const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var mensajeInicial2 = document.getElementById("mensajeInicial2").value;
  var resultado2 = document.getElementById("resultado2");

  let nuevoMensaje = "";
  for (let i = 0; i < mensajeInicial2.length; i++) {
    let caracter = mensajeInicial2[i];
    let index = alfabeto.indexOf(caracter.toLowerCase());  // Convertir a minúscula para hacer la búsqueda
    if (index !== -1) {   // Comprueba si el caracter existe en el alfabeto
      let newIndex = (index - 5 + alfabeto.length) % alfabeto.length;
      let newCaracter = alfabeto[newIndex];
      // Mantener el caso original del caracter
      if (caracter === caracter.toUpperCase()) {
        newCaracter = newCaracter.toUpperCase();
      }
      nuevoMensaje += newCaracter;
    } else {
      nuevoMensaje += caracter;  // Mantener los caracteres no presentes en el alfabeto
    }
  }
  resultado2.value = nuevoMensaje;
}

function resetContainer(containerNumber) {
  const mensajeInicial = document.getElementById(`mensajeInicial${containerNumber}`);
  const resultado = document.getElementById(`resultado${containerNumber}`);
  
  mensajeInicial.value = "";
  resultado.value = "";
}
