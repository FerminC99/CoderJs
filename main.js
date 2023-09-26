
alert(
    `Para nosotros la edad promedio de un grupo equivale a su vida util. De esta manera vamos a calcular la edad del equipo de trabajo, con esto vamos a determinar si el grupo es apto o no para seguir juntos en el proyecto. Por esta razon les vamos a solicitar que ingrese su edad y las de su grupo de trabajo`);

function calcularPromedioEdad () {
    const promedioEdad = 18
let edad1 = parseInt (prompt("ingrese su edad"))
let edad2 = parseInt (prompt("ingrese la edad de su colega"))
let edad3 = parseInt (prompt("ingrese la edad de su jefe de sector"))
let promedio = (edad1 + edad2 + edad3)/3
parseInt (promedio)
if (promedio >= 20 && promedio <=40) {
    alert ("su grupo es apto, su edad promedio es de " + promedio)
 }

 else if (promedio >= 0 && promedio <=19 || promedio >=41  && promedio <=65 ) {
    alert ("su grupo no es apto, su edad promedio es de " + promedio)
 }
 
 else {
    alert("Los valores de su grupo estan fuera del rango permitido, reviselos y vuelva a ingresarlos")
 }
while (promedio <= promedioEdad){
    const aniosFaltantes = promedioEdad - promedio
    alert ("edad no apta a su grupo les faltan esta cantida de anios " + aniosFaltantes)
    promedio = parseInt(prompt("cambia a un colega por uno de una edad mayor"))

}
}

calcularPromedioEdad()





