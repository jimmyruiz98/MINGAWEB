function validar() {
    var nombre, apellido, correo, usuario, clave, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    telefono = document.getElementById("telefono").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre == "" || apellido == "" || correo == "" || usuario == "" || clave == "" || telefono == "" ){
        alert("Todos los campos son obligatorios");
        return false;
    } else if(!expresion.test(correo)){
        alert("Correo no valido");
        return false;
    } else {
        alert("Datos ingresados correctamente \nSerás redirigido al inicio de sesión");
        window.location = "ingresar.html";
        return false;
    }
}

