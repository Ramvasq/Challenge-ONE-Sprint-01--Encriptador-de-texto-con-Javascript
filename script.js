const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muñeco = document.getElementById("muñeco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const replace = (presentacionFinal) => {
    mensajeFinal.innerHTML = presentacionFinal;
    ingresoTexto.value = "";
    muñeco.classList.add("oculto");
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reset = () => {
    mensajeFinal.innerHTML = "";
    ingresoTexto.focus();
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    muñeco.classList.remove("oculto");
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
}

botonEncriptar.addEventListener("click", () => {
    const text = ingresoTexto.value.toLowerCase()
    function encriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][0])){
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newText;
    }
    //const textoEncriptado = encriptar(text);
    //mensajeFinal.innerHTML = textoEncriptado;
    replace(encriptar(text));
});

botonDesencriptar.addEventListener("click", () => {
    const text = ingresoTexto.value.toLowerCase();
    function desencriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newText
    }
    //const textoDesencriptado = desencriptar(text);
    //mensajeFinal.innerHTML = textoDesencriptado;
    replace(desencriptar(text));
}); 

botonCopiar.addEventListener("click", () => {
    let text = mensajeFinal;
    //navigator.clipboard.writeText(text.value); //not compatible with mobile
    
    text.select();
    document.execCommand("copy")
    alert("Copied text");  
    reset();
})