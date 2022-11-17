function validar() {
    var nombre, cedula, telefono, expresion;
    cedula = document.getElementById("cedula").value;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(cedula == "" || nombre == "" || telefono == "" ){
        alert("Algunos campos son obligatorios");
        return false;
    } else if(!expresion.test(correo)){
        alert("Correo no valido");
        return false;
    } else {
        alert("Estás participando a la MINGA COMUNITARIA");
        window.location = "ini_participante.html";
        return false;
    }
}