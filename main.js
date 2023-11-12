
const Persona = function (nombre, edad, area, sueldo) {
  this.nombre = nombre
  this.edad = edad
  this.area = area
    this.sueldo = sueldo
 }

 let persona1 = new Persona ("Franco", 21, "Cocina", 1000)
 let persona2 = new Persona ("Kevin", 19, "Cocina", 1000)
 let persona3 = new Persona ("Juan", 31, "Barra", 700)
 let persona4 = new Persona ("Gabriel", 22, "Barra", 700)
 let persona5 = new Persona ("Milagros", 27, "Mozo", 900)
 let persona6 = new Persona ("Federico", 26, "Mozo", 900)
 let persona7 = new Persona ("Sofia", 20, "Commise", 500)
 let persona8 = new Persona ("Ailen", 27, "Commise", 500)
 let persona9 = new Persona ("Fermin", 23, "Deposito",800)
 let persona10 = new Persona ("Brian", 22, "Deposito",800)
 let persona11 = new Persona ("Carlos", 30, "Limpieza", 400)
 let persona12 = new Persona ("Marisa", 50, "Limpieza",400)

 let pruebaPersonal = "prueba.json";
 
 let lista = [persona1, persona2,persona3,persona4,persona5,persona6,persona7,persona8,persona9,persona10,persona11,persona12]

 const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
 guardaLocal("listaPersonas", JSON.stringify(lista))
 
 console.log(localStorage.getItem("listaPersonas"))
const buttonfiltrar = document.getElementById("filtrar");
buttonfiltrar.addEventListener("click", filtrarPersonal);

const agregar = document.getElementById("agregar");
agregar.addEventListener('click', cargaEmpleado);

function filtrarPersonal() {
    const section = document.querySelector("section");
    const input = document.getElementById("filtroPersonal").value
    const palabraClave = input.trim().toUpperCase();
    const resultado = lista.filter((persona) => persona.nombre.toUpperCase().includes(palabraClave));

if (resultado.length >0){
    const container = document.createElement('div');
     
resultado.forEach((persona) => { 
  const card = document.createElement("div");
    
  const nombre = document.createElement("h3");
  nombre.textContent = persona.nombre;
  card.appendChild(nombre);

  const edad = document.createElement("p");
  edad.textContent = `edad: ${persona.edad}`;
  card.appendChild(edad);

    const area = document.createElement("p");
  area.textContent = `area: ${persona.area}`;
  card.appendChild(area);

  const sueldo = document.createElement("p");
  sueldo.textContent = `sueldo: ${persona.sueldo}`;
  card.appendChild(sueldo);

  container.appendChild(card);
});

section.appendChild(container);

}
else {
  
  Swal.fire({
    icon: "question",
    title: "A quien esta buscando?",
    text: "No se encontro ningun empleado con ese nombre, Intente de nuevo!",
    
  });
}
}

function cargaEmpleado() {
   let nombre = document.getElementById("nombre").value.trim();
   let edad = parseFloat(document.getElementById("edad").value);
   let area = document.getElementById("area").value.trim();
   let sueldo = parseFloat(document.getElementById("sueldo").value);
   
   if (isNaN(edad) || isNaN(sueldo) || nombre === "" || area === '') { 
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingese valores validos",
    });;
    return;
  }
 
   let persona = new Persona (nombre,edad,area,sueldo);
   console.log(persona)

  lista.push(persona);
  localStorage.setItem("listaPersonas", JSON.stringify(lista));
  console.log("tamano lista: ", lista.length)
  console.log(lista)
  console.log(localStorage.getItem("listaPersonas"))
  document.getElementById("nombre").value = '';
  document.getElementById("edad").value = '';
  document.getElementById("area").value = '';
  document.getElementById("sueldo").value = '';

  muestraLista(lista)
}
function muestraLista (lista){
  const caja = document.createElement("div");
  lista.forEach((persona) => {   

  const card = document.createElement('div'); 
  const nombre = document.createElement('h3');
  nombre.textContent = persona.nombre;
  card.appendChild(nombre);

  const edad = document.createElement('p');
  edad.textContent = `Edad: ${persona.edad}`;
  card.appendChild(edad);

  const area = document.createElement('p');
  area.textContent = `Area: ${persona.area}`;
  card.appendChild(area);

  const sueldo = document.createElement('p');
  sueldo.textContent = `Sueldo: ${persona.sueldo}`;
  card.appendChild(sueldo);

  caja.appendChild(card);
  const body = document.querySelector('body');
  body.appendChild(caja);
});
}

document.addEventListener("DOMContentLoaded", function() {
  fetch(pruebaPersonal)
  .then(response => response.json())
  .then(data => {
      persona = data;
      console.log (persona)
      muestraLista(persona);
  });
});







