const cuenta = {
  saldo: 0,
  retirar: function (cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo = this.saldo - cantidad;
      return true;
    } else {
      //fondos insuficientes
      return false;
    }
  },
  depositar: function (cantidad) {
    this.saldo = this.saldo + cantidad;
    return this.saldo;
  },
};

module.exports = cuenta;
