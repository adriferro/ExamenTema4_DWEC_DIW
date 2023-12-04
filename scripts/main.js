import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";

const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`
}

const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, '2400')
mostrarResultado('Vehiculo 1:<hr/>')
vehiculo1.mostrarDatos()
vehiculo1.arrancar()
vehiculo1.acelerar(140)
vehiculo1.frenar()

const vehiculoObject = {
    marca: 'BMW',
    modelo: 'CLK',
    color: 'rojo',
    anioFabr: 1992,
    cilindrada: '2400'
}

localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject))

console.log(JSON.parse(localStorage.getItem("vehiculo")))



const deportivo1 = new AutomovilDeportivo('Ferrari', 'Spider', 'amarillo', 2020, '4000', '500')
mostrarResultado('<br/><br/>Deportivo 1:<hr/>')
deportivo1.mostrarDatos()
deportivo1.arrancar()
deportivo1.acelerar(140)
deportivo1.frenar()


const deportivoObject = {
    marca: 'Ferrari',
    modelo: 'Spider',
    color: 'amarillo',
    anioFabr: 2020,
    cilindrada: '4000',
    potencia: '500'
}


for(let key in deportivoObject){
    if(deportivoObject.hasOwnProperty){
        localStorage.setItem(key, deportivoObject[key])
    }
}


localStorage.removeItem('modelo')
localStorage.removeItem('color')

//localStorage.clear()