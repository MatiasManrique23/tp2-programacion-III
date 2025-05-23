
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseInt(document.getElementById("altura").value);
  const correo = document.getElementById("correo").value.trim();

  let mensaje = "";
  let valido = true;

  if (nombre === "" || nombre.length > 50) {
    mensaje += "Error. debe ingresar un nombre.<br>";
    valido = false;
  }

  if (apellido === "" || apellido.length > 50) {
    mensaje += "Error. Debe ingresar un apellido .<br>";
    valido = false;
  }

if (isNaN(edad) || edad < 0 || edad < 18) {
    mensaje += "La edad debe ser mayor o igual a 18 años y no negativa.<br>";
    valido = false;
}

if (isNaN(altura) || altura <= 0 || altura > 230) {
    mensaje += "La altura debe ser positiva y no mayor a 230 cm.<br>";
    valido = false;
}

if (correo === "" || !correo.includes("@")) {
mensaje += "El correo debe contener '@' .<br>";
valido = false;
}

const parrafo = document.getElementById("mensaje");
parrafo.innerHTML = valido ? "✅ Todos los datos son válidos." : mensaje;
parrafo.style.color = valido ? "green" : "red";
}