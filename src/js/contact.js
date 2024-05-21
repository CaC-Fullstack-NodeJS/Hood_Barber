function validarForm(event) {
    event.preventDefault()
}

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;

if (nombre.trim() == "") {
    alert("Por favor ingresá tu nombre");
    return false;
}

if (email.trim() == "") {
    alert("Por favor ingresá tu correo electrónico");
    return false;
}

if (!emailValido(email)) {
    alert("Por favor ingresá un email válido");
    return true
}

if (telefono.trim() === "") {
    alert("Por favor ingresá tu número de teléfono");
    return false;
}

function emailValido() {
    let emailRegex = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

alert("Formulario enviado correctamente");
return true;

document.getElementById("formu").addEventListener("submit", validarForm);