import { mostrarResultado } from "./main.js";

export class Vehiculo{
    #marca;
    #modelo;
    #color;
    #anioFabr;
    #cilindrada;

    constructor(marca, modelo, color, anioFabr, cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#anioFabr = anioFabr;
        this.#cilindrada = cilindrada;
    }

    mostrarDatos(){
        const datos = `
            ${this.#marca}, ${this.#modelo}, ${this.#color}, ${this.#anioFabr}, ${this.#cilindrada}.`
            
        mostrarResultado(`<p>${datos}</p>`)
    }


    acelerar(velocidad){
        const mensaje = `El vehiculo ha acelerado hasta ${velocidad}.`
        mostrarResultado(`<p>${mensaje}</p>`)
    }

    arrancar(){
        const mensaje = `El vehiculo ha arrancado.`
        mostrarResultado(`<p>${mensaje}</p>`)
    }

    frenar(){
        const mensaje = `El vehiculo ha parado.`
        mostrarResultado(`<p>${mensaje}</p>`)
    }



    get marca(){
        return this.#marca;
    }
    set marca(marca){
        this.#marca = marca;
    }

    get modelo(){
        return this.#modelo;
    }
    set modelo(modelo){
        this.#modelo = modelo;
    }

    get color(){
        return this.#color;
    }
    set color(color){
        this.#color = color;
    }

    get anioFabr(){
        return this.#anioFabr;
    }
    set anioFabr(anioFabr){
        this.#anioFabr = anioFabr;
    }

    get cilindrada(){
        return this.#cilindrada;
    }
    set cilindrada(cilindrada){
        this.#cilindrada = cilindrada;
    }

}