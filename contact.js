const formulario = document.querySelector("form");

formulario.addEventListener("submit", () => {
    event.preventDefault()

    const nombre = document.getElementById("nombre");  
    const email = document.getElementById("email");
    const asunto = document.getElementById("asunto");

    if(nombre.value === "") {
    
        document.getElementById("nombre").setAttribute("aria-invalid", "true")
        document.getElementById("nombre").setAttribute("aria-describedby", "invalid-helper")
        document.getElementById("nombre").setAttribute("placeholder", "¡Tu nombre!")
    } else if(email.value === "" ){
        document.getElementById("email").setAttribute("aria-invalid", "true")
        document.getElementById("email").setAttribute("aria-describedby", "invalid-helper")
        document.getElementById("email").setAttribute("placeholder", "¡Tu correo!")
    } else if(asunto.value === "" ){
        document.getElementById("asunto").setAttribute("aria-invalid", "true")
        document.getElementById("asunto").setAttribute("placeholder", "¡Escribe algo!")
    } else {
        return alert("Esta funcion se esta desarrollando")
    }
})