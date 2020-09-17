"use strict";

require("core-js/modules/web.dom-collections.iterator");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _privado = new WeakMap();

var Guitarra = /*#__PURE__*/function () {
  function Guitarra(tipo, cuerdas, trastes, color) {
    _classCallCheck(this, Guitarra);

    this._color = color;
    var atributosPrivados = {
      _tipo: tipo,
      _cuerdas: cuerdas,
      _trastes: trastes
    };

    _privado.set(this, {
      atributosPrivados: atributosPrivados
    });

    console.log(_privado.get(this).atributosPrivados);
  }

  _createClass(Guitarra, [{
    key: "getTrastes",
    value: function getTrastes() {
      return _privado.get(this).atributosPrivados._trastes;
    }
  }, {
    key: "tocarGuitarra",
    value: function tocarGuitarra() {
      return "Tocando la guitarra de ".concat(this.getTrastes(), " cuerdas");
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(nColor) {
      this._color = nColor;
    }
  }, {
    key: "cuerdas",
    get: function get() {
      return _privado.get(this).atributosPrivados._cuerdas;
    },
    set: function set(nuevaCuerdas) {
      _privado.get(this).atributosPrivados._cuerdas = nuevaCuerdas;
    }
  }, {
    key: "tipo",
    get: function get() {
      return _privado.get(this).atributosPrivados._tipo;
    },
    set: function set(nuevoTipo) {
      _privado.get(this).atributosPrivados._tipo = nuevoTipo;
    }
  }]);

  return Guitarra;
}();

var g1 = new Guitarra("Eléctrica", 7, 24, "negro");
console.log(g1.cuerdas);
g1.cuerdas = 8;
console.log(g1.cuerdas);
g1.tipo = "Acustica";
console.log(g1.tipo);
console.log(g1);
console.log(g1.tocarGuitarra());
console.log(g1.getTrastes());
g1._trastes = 12;
console.log(g1.getTrastes());
console.log(g1.color);
g1.color = "Blanco";
console.log(g1.color);
console.log(g1);