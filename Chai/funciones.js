module.exports = {
  ejecutarOperacion: function (operacion, valor1, valor2) {
    if (operacion == "S") {
      this.suma(valor1, valor2);
      console.log("Se realizará suma");
    } else {
      console.log("Se realizará resta");
      this.resta(valor1, valor2);
    }
  },
  suma: (valor1, valor2) => valor1 + valor2,
  resta: (valor1, valor2) => valor1 - valor2,
};
