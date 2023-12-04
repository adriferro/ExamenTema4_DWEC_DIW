import { Vehiculo } from "./vehiculo.js";
import { mostrarResultado } from "./main.js";

export class AutomovilDeportivo extends Vehiculo{
    #potencia;

    constructor(marca, modelo, color, anioFabr, cilindrada, potencia){
        super(marca, modelo, color, anioFabr, cilindrada)
        this.#potencia = potencia
    }

    activarModoDeportivo(){
        const mensaje = `El modo deportivo ha sido activado.`
        mostrarResultado(`<p>${mensaje}</p>`)
    }

    mostrarDatos(){
    }

    get potencia(){
        return this.#potencia;
    }
    set potencia(potencia){
        this.#potencia = potencia;
    }
}