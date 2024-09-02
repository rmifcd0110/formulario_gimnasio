// Evento onsubmit para validar y mostrar un mensaje personalizado
document.getElementById("formularioGimnasio").onsubmit = function (event) {
    let nombre = document.getElementById("nombre").value;
    if(nombre === ""){
        alert("Por favor, ingrese el nombre completo");
        event.preventDefault(); // Evita que evíe el formulario
    } else {
        alert("Inscripción realiada con éxito!");
    }
};

//Evento onfocus en el campo de nombre para cambiar el fondo
document.getElementById("nombre").onfocus = function () {
    this.style.backgroundColor = "#e0f7fa"; // Cambia el color de fondo
};

//Evento onblur para volvercolor original cuando se pierde el foco
document.getElementById("nombre").onblur = function () {
    this.style.backgroundColor = ""; //Vuelve al color original
}

