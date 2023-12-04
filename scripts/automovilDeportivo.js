import { Vehiculo } from "./vehiculo.js";

export class AutomovilDeportivo extends Vehiculo{
    #potencia;

    constructor(marca, modelo, color, anioFabr, cilindrada, potencia){
        super(marca, modelo, color, anioFabr, cilindrada)
        this.#potencia = potencia
    }

    activarModoDeportivo(){}
    
    get potencia(){
        return this.#potencia;
    }
    set potencia(potencia){
        this.#potencia = potencia;
    }
}