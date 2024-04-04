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

const contenedor = document.querySelector (".ul");

let lista = document.createElement("ul");
lista.classList.add("lista");

for(servicio of servicios) {
       lista.innerHTML+=`<li class=lista-item>${servicio}</li>`;
 };
 contenedor.append(lista);

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
}*/


const nameUser = input 
localStorage.setItem ('usuario', "nameUser")

const formulario=document.querySelector("#formulario")
console.log(formulario);

function mostrarError = document.createElement("p")
mensajeError.textContent = msg
mensajeError.classList.add("error")
const modal = document.querySelector("#content")
modal.appendChild(mensajeError);

function agregarcomentario(evt) {
    evt.preventDefault()
    console.log("Agregaste un comentario")
    const comentario = document.querySelector("#comentario").value
}

localStorage.setItem(comentarioGuardado)
