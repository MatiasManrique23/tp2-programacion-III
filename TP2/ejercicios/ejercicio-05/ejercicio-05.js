function calcularArea() {
const a = parseFloat(document.getElementById("a").value);
const b = parseFloat(document.getElementById("b").value);
const c = parseFloat(document.getElementById("c").value);

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= c) {
    alert("Por favor, ingrese valores validos. A debe ser mayor que C.");
    return;
}

const alturaTriangulo = a - c;
const areaTriangulo = (b * alturaTriangulo) / 2;
const areaRectangulo = b * c;
const areaTotal = areaTriangulo + areaRectangulo;

document.getElementById("resultado").innerText = 
`El area total del terreno es: ${areaTotal.toFixed(2)} m²`;
}
