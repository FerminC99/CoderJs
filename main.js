

//alert ("llamar a la funcion")

const Persona = function (nombre, edad, area, sueldo) {
    this.nombre = nombre
    this.edad = edad
    this.area = area
    this.sueldo = sueldo
}
//LISTA DEL PERSONAL

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
let persona11 = new Persona ("Jhon", 30, "Limpieza", 400)
let persona12 = new Persona ("Marisa", 50, "Limpieza",400)

//array del personal

let lista = [persona1, persona2,persona3,persona4,persona5,persona6,persona7,persona8,persona9,persona10,persona11,persona12]

//filtro sin espacios y en minuscula del area donde trabaja el empleado

function filtrarPersonal (){
    let palabraClave = prompt("Ingresa dato del empleado").trim().toLowerCase()
    let resultado = lista.filter((x)=> x.area.toLowerCase().includes(palabraClave))
    if(resultado.length >0){
        console.table("hay " + resultado.length + " " + palabraClave)
    }else{
        alert("no hay resultado con " + palabraClave)
    }
}

//agrego los datos de un nuevo empleado
function nuevaPersona() {
    let nombre = ""
    let edad = ""
    let area = ""
    let sueldo
   // let lista = []

    while(nombre != "no"){
        nombre = prompt ("ingresa el nombre del empleado, ingrese No para cortar").trim(). toLowerCase()
        edad = parseInt(prompt("ingresa la edad del empleado"))
        area = prompt ("ingresa la nueva area de trabajo").trim(). toLowerCase()
        sueldo = parseFloat(prompt("ingresa el sueldo percibido")) 
    
    //verificacion si los datos ingresados estan bien 
        if (isNaN(sueldo) || isNaN(edad) ||nombre === "" || area === "") {
            alert ("por favor ingrese los datos correctos")
        }
        else{
            console.log("entra")
            let persona = new Persona (nombre,edad,area,sueldo)
            lista.push(persona)
        }
    }

  //  return lista
}
//funcion para calcular distintos datos del personal, en este caso la de edad de los mozos
function calcularDatos(lista) {

    let promedio = 0
    let suma = 0
    let cont = 0

    for (let i = 0; i<lista.length; i++) {

        if(lista[i].area.toLowerCase() == "mozo"){
            suma += lista[i].edad  
            console.log ("suma: " + suma)
            cont++
            console.log ("cont " + cont )
        }
    }

    promedio = suma/cont
    console.log("El promedio de edad de los mozos es de " + promedio)
} 


//let lista = nuevaPersona()
nuevaPersona()
calcularDatos(lista)
filtrarPersonal()


//agrego al nuevo empleado al sistema
//console.table (lista)