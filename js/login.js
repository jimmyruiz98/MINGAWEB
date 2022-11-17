function iniciar(){
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;

    if(usuario == "" || clave == ""){
        alert("Rellene los campos");
        return false;
    } else if(usuario == "admin" && clave == "admin"){
        alert("Bienvenido a Participar a la minga comunitaria");
        window.location = "ini_administrador.html";
        return false;
    } else if(usuario == "usuario" && clave == "usuario"){
        alert("Te damos una cordial bienvenida");
        window.location = "ini_participante.html";
        return false;
    } else {
        alert("Datos incorrectos, verifique usuario y contraseña");
        return false;
    }
}