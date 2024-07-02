function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        alert("Bienvenido Admin");
        window.location.href = "../productos/productos.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
