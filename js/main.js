const servicios = [

        { 
        nombre: "Diseño de Marca", 
        areaServicio: "Diseño Gráfico",  
        precio: 100000, 
        pack: "Premium",
    },
        { 
        nombre: "Diseño de Marca", 
        areaServicio: "Diseño Gráfico",  
        precio: 90000, 
        pack: "Advance",
    },
        { 
        nombre: "Diseño de Marca", 
        areaServicio: "Diseño Gráfico",  
        precio: 80000, 
        pack: "Basic",
    },
        { 
        nombre: "Diseño de Piezas Graficas", 
        areaServicio: "Diseño Gráfico",  
        precio: 105000, 
        pack: "Premium",
    },
        { 
        nombre: "Diseño de Piezas Graficas", 
        areaServicio: "Diseño Gráfico",  
        precio: 95000, 
        pack: "Advance",
    },
        { 
        nombre: "Diseño de Piezas Graficas", 
        areaServicio: "Diseño Gráfico",  
        precio: 85000, 
        pack: "Basic",
    },
        { 
        nombre: "Admin Redes Soc", 
        areaServicio: "Marketing Digital",  
        precio: 95000, 
        pack: "Premium",
    },
        { 
        nombre: "Admin Redes Soc", 
        areaServicio: "Marketing Digital",  
        precio: 85000, 
        pack: "Advance",
    },
        { 
        nombre: "Admin Redes Soc", 
        areaServicio: "Marketing Digital",  
        precio: 75000, 
        pack: "Basic",
    },
        { 
        nombre: "Crear Contenido y Publicar", 
        areaServicio: "Marketing Digital",  
        precio: 120000, 
        pack: "Premium",
    },
        { 
        nombre: "Crear Contenido y Publicar", 
        areaServicio: "Marketing Digital",  
        precio: 110000, 
        pack: "Advance",
    },
        { 
        nombre: "Crear Contenido y Publicar", 
        areaServicio: "Marketing Digital",  
        precio: 99000, 
        pack: "Basic",
    }
];

const contenedor = document.querySelector ("div");

console.log(contenedor);

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
 }

/*for(servicio of servicios) {
       lista.innerHTML+=`<li class=lista-item>${servicio}</li>`;
 };
 contenedor.append(lista);*/


 /*const disenioGrafico = document.querySelector (".ul");

let lista = document.createElement("li");
lista.classList.add("lista");


disenioGrafico.append;*/


 //Lo copié tal cual del ejercicio de la presentacion de la clase y no me funciona
 //no encuentro el error.
 
 /*for(servicio of servicios) {
   let contenedor = document.createElement ("ul");
      contenedor.innerHTML=`<h4> Propducto ${servicio.producto}</h4>
                            <p> Area ${servicio.areaServicio}</p>
                            <p> Cliente ${servicio.clienteTipo}</p>
                            <p> Pack ${servicio.pack}</p>
                            <b> Precio ${servicio.precio}</b>`;
      ul.appendChild(contenedor);
}
*/

let usuarioIngresado = input (nameUser);
localStorage.setItem("usuario-ingresado", usuarioIngresado);

const formulario=document.querySelector("#formulario");
console.log(formulario);

function mostrarError = document.createElement("p");
mensajeError.textContent = msg
mensajeError.classList.add("error")
const modal = document.querySelector("#content")
modal.appendChild(mensajeError);

function agregarcomentario(evt) {
    evt.preventDefault()
    console.log("Agregaste un comentario")
    const comentario = document.querySelector("#comentario").value
}

