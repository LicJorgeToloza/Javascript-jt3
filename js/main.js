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



 const registroForm = document.querySelector('#registroForm');
    registroForm.addEventListener('submit', (e)=>{
        e.preventDefault()

        const name = document.querySelector('#name').value
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value

        const Users = JSON.parse(localStorage.getItem('user')) || []
        const usuarioRegistrado = Users.find (user => user.email === email)

        if (usuarioRegistrado){
            return alert ('Ud. ya está Registrado')
        } 

        Users.push ({name: name, email: email, password: password})
        localStorage.setItem('Users', JSON.stringify(Users))

            alert("Registro Exitoso")

    });




        
    


      