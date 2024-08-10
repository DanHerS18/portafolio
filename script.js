const textArea = document.querySelector(".text-area");
const mensaje  = document.querySelector(".mensaje");
const textoMensaje = document.querySelector(".text-mensaje");
const textoMensaje2 = document.querySelector(".text-mensaje2");
const botonCopiar = document.querySelector(".copiar");

function btnEncriptador(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    // Ocultar los textos
    textoMensaje.style.display = "none";
    textoMensaje2.style.display = "none";
    // Mostrar el botón de copiar
    botonCopiar.style.display = "block";
    
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

// Función para copiar el texto encriptado
botonCopiar.addEventListener("click", function() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});
