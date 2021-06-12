import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature("./test/specs/features/deposito_banco.feature");
const cuenta = require("../cuenta");

defineFeature(feature, (test) => {
  beforeEach(() => {
    cuenta.saldo = 0;
  });

  test("Hacer un deposito", ({ given, when, then }) => {
    given(/^el saldo de mi cuenta es \$(\d+)$/, (accountBalance) => {
      cuenta.saldo = parseInt(accountBalance);
    });

    when(/^me paguen \$(\d+) por escribir codigo asombroso$/, (amount) => {
      cuenta.depositar(parseInt(amount));
    });

    then(/^el saldo de mi cuenta sera \$(\d+)$/, (accountBalance) => {
      expect(cuenta.saldo).toBe(parseInt(accountBalance));
    });
  });
});
