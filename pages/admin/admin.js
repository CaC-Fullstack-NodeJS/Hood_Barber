function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        alert("Bienvenido Admin");
        window.location.href = "https://vercel-codo2024-mrqrzl7hi-manuel-caporasos-projects.vercel.app/";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
