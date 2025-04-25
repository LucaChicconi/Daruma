
// 1. Crea una clase que reciba dos propiedades
class Jugador{
    #oro
    #diamantes
    #dinero
    constructor(latitud,longitud,altura,oro = 0,diamantes = 0 ,dinero= 0){
        this.latitud = latitud
        this.longitud = longitud
        this.altura = altura
        this.#oro= oro
        this.#diamantes= diamantes
        this.#dinero = dinero
    }
    darPosicion(){
        return [this.latitud,this.longitud]
    }
    darAltura(){
        return [this.altura]
    }
    static subirDiezMetros(altura){
        return altura + 10
    }
}
let punto = new Jugador(2203,338,1)
console.log(punto.darPosicion())
console.log(punto.darAltura())
// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

console.log(Jugador.subirDiezMetros(punto.altura))

// 6. Crea una clase que haga uso de herencia
class Minero extends Jugador{

}
// 7. Crea una clase que haga uso de getters y setters

class Minero2 {
    #oro
    #diamantes
    #dinero
    constructor (oro,diamantes, dinero = 0){
        this.#oro= oro
        this.#diamantes= diamantes
        this.#dinero = dinero
    }
    get cantDiamantes(){
        return this.#diamantes
    }
    get cantDinero(){
        return this.#dinero
    }
    get cantOro(){
        return this.#oro
    }
    set cobrarDinero(_){
        const minerales = 5*this.#diamantes + 3*this.#oro
        this.#dinero = minerales
        return this.#dinero
    }
    set setDinero(valor){
        this.#dinero = valor;
    }
}
let minero = new Minero2(5,23,10)
console.log(minero.cantDiamantes)
minero.cobrarDinero = true
console.log(minero.cantDinero)



// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 

class MineroExperto extends Minero2 {
    constructor(oro, diamantes, dinero = 0) {
        super(oro, diamantes, dinero);
    }
    // Sobrescribimos el setter de cobrarDinero para obtener más dinero
    set cobrarDinero(_) {
        const minerales = 10 * this.cantDiamantes + 5 * this.cantOro;
        // Usamos un método privado auxiliar
        this.setDinero = minerales;
    }

}

const novato = new Minero2(5, 23);
console.log("Novato - Diamantes:", novato.cantDiamantes);
novato.cobrarDinero = true;
console.log("Novato - Dinero:", novato.cantDinero); // 5*23 + 3*5 = 130

const experto = new MineroExperto(5, 23);
experto.cobrarDinero = true;
console.log("Experto - Dinero:", experto.cantDinero); // 10*23 + 5*5 = 255
