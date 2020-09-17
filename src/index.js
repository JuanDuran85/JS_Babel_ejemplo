class Guitarra {
    constructor(tipo,cuerdas,trastes){
        this.tipo = tipo;
        this._cuerdas = cuerdas;
        this.trastes = trastes;
    }

    get cuerdas(){
        return this._cuerdas;
    }

    set cuerdas(nuevaCuerdas){
        this._cuerdas = nuevaCuerdas;
    }

    tocarGuitarra(){
        return `Tocando la guitarra de ${this._cuerdas} cuerdas`
    }
}

let g1 = new Guitarra("Eléctrica",7,24);

console.log(g1);
g1.cuerdas = 8;
console.log(g1.cuerdas);
console.log(g1.tipo);
g1.trastes = 22;
console.log(g1.trastes);
console.log(g1.tocarGuitarra());