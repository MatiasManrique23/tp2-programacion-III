function calcularIMC() {
const peso = parseFloat(document.getElementById("peso").value);
const estatura = parseFloat(document.getElementById("estatura").value);

if (isNaN(peso) || isNaN(estatura) || estatura <= 0) {
    alert("Por favor, ingresa valores validos.");
    return;
}

  const imc = peso / (estatura * estatura);
window.alert("Tu IMC es: " + imc.toFixed(2));
}