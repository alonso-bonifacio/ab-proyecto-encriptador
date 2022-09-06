const inputPalabra = document.querySelector("#input-texto");
const mensaje = document.querySelector("#mensaje");
const matrixCode = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

// Esconde el div-aparece de la pantalla
document.getElementById("div-aparece").style.display = "none";


// Al hacer click direcciona el programa para el método que encripta el texto
document.getElementById("btn-encriptar").onclick = (e) => {
  e.preventDefault();
  const textoEncriptado = encriptar(inputPalabra.value.toLowerCase());
  if (textoEncriptado != ""){
    mensaje.value = textoEncriptado;
    inputPalabra.value = "";
    aparece();
  }
};

// Al hacer click y direcciona el programa para el método que desencripta el texto
document.getElementById("btn-desencriptar").onclick = (e) => {
  e.preventDefault();
  const textoDesencriptado = desencriptar(inputPalabra.value.toLowerCase());
  if (textoDesencriptado != "") {
    mensaje.value = textoDesencriptado;
    inputPalabra.value = "";
    aparece();
  }
};

// Al hacer click y copia el texto
document.getElementById("btn-copiar").onclick = (e) => {
  e.preventDefault();
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("El texto se copió al portapapeles ✔")
};

//encripta el texto
function encriptar(textoEncriptar) {
  for (let i = 0; i < matrixCode.length; i++) {
    if (textoEncriptar.includes(matrixCode[i][0])) {
      textoEncriptar = textoEncriptar.replaceAll(matrixCode[i][0], matrixCode[i][1]);
    }
  }
  return textoEncriptar;
}

//desencripta el texto
function desencriptar(textoDesencriptar) {
  for (let i = 0; i < matrixCode.length; i++) {
    if (textoDesencriptar.includes(matrixCode[i][1])) {
      textoDesencriptar = textoDesencriptar.replaceAll(matrixCode[i][1], matrixCode[i][0]);
    }
  }
  return textoDesencriptar;
}

// desaparece la salida de mensaje no encontrado la pantalla
function aparece() {
  document.getElementById("div-desaparece").style.display = "none";
  document.getElementById("div-aparece").style.display = "block";
}

// Al hacer click en el logo aparece la salida de mensaje no encontrado la pantalla
document.getElementById("logo").onclick = (e) => {
  e.preventDefault();
  document.getElementById("div-aparece").style.display = "none";
  document.getElementById("div-desaparece").style.display = "block";
}

