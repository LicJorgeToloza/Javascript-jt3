const servicios = ["Diseño de Marca A DG", "Diseño de Marca B DG", "Diseño de Marca C DG",
"Diseño de Piezas Graficas A DG", "Diseño de Piezas Graficas B DG", "Diseño de Piezas Graficas C DG",
"Admin Redes Soc A MD", "Admin Redes Soc B MD", "Admin Redes Soc C MD"];

const contenedor = document.querySelector ("div");


let lista2 = document.createElement("ul");
lista2.classList.add("lista2");
for(servicio of servicios) {
    lista2.innerHTML += `<li class="lista-item">${servicio}</li>`
 };

contenedor.append(lista2);

const agregaServAlForm = document.querySelector("#agregaItemForm");
const inputServAlForm = document.querySelector("#inputServicio");
const sumarAlCarro = document.querySelector("#carrito");

agregaServAlForm.addEventListener("submit", agregaServ)

 function agregaServ (e) {
    e.preventDefault();

        if (inputServAlForm.value != "") {
            
            let item = document.createElement("li");
            item.innerText = inputServAlForm.value;
            sumarAlCarro.append(item);
        }

    agregaServAlForm.reset();
 };

function estaRegistrado(email) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    return usuarios.some(function(usuario) {
        return usuario.email === email;
    });
}

function registrarUsuario(nombre, email, contrasena) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ nombre: nombre, email: email, contrasena: contrasena });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

document.querySelector('#registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.querySelector('#nombre').value;
    let email = document.querySelector('#email').value;
    let contrasena = document.querySelector('#contrasena').value;

    if (estaRegistrado(email)) {
        alert('El email ya está registrado');
    } else {
        registrarUsuario(nombre, email, contrasena);
        alert('¡Registro exitoso!');
    }
});




        
    


      