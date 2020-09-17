var _privado = new WeakMap();

class Guitarra {
    constructor(tipo,cuerdas,trastes,color){
        this._color = color;
        var atributosPrivados = {
            _tipo: tipo,
            _cuerdas: cuerdas,
            _trastes: trastes
        }
        _privado.set(this,{atributosPrivados});
        console.log(_privado.get(this).atributosPrivados)
    }

    get color(){
        return this._color;
    }

    set color(nColor){
        this._color = nColor;
    }

    get cuerdas(){
        return _privado.get(this).atributosPrivados._cuerdas;
    }

    set cuerdas(nuevaCuerdas){
        _privado.get(this).atributosPrivados._cuerdas = nuevaCuerdas;
    }
    
    get tipo(){
        return _privado.get(this).atributosPrivados._tipo;
    }

    set tipo(nuevoTipo){
        _privado.get(this).atributosPrivados._tipo = nuevoTipo;
    }

    getTrastes(){
        return _privado.get(this).atributosPrivados._trastes
    }

    tocarGuitarra(){
        return `Tocando la guitarra de ${this.getTrastes()} cuerdas`
    }
}

let g1 = (new Guitarra("Eléctrica",7,24,"negro"));

console.log(g1.cuerdas);
g1.cuerdas = 8;
console.log(g1.cuerdas);
g1.tipo = "Acustica"
console.log(g1.tipo);
console.log(g1);
console.log(g1.tocarGuitarra());
console.log(g1.getTrastes());
g1._trastes = 12;
console.log(g1.getTrastes());
console.log(g1.color);
g1.color = "Blanco"
console.log(g1.color);
console.log(g1);