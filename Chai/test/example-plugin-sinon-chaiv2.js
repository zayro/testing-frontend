const chai = require("chai");

const should = require("chai").should();

const sinonChai = require("sinon-chai");

const sinon = require("sinon");

const r = require("../funciones");

chai.use(sinonChai);

describe("Usar calculadora", function () {
  it("puede llamar la funcion de Suma", () => {
    const resultado = 5;

    const sumaSpy = sinon.spy(r, "suma");

    const consoleSpy = sinon.spy(console, "log");

    r.ejecutarOperacion("S", 2, 3);

    sumaSpy.should.have.callCount(1);

    //sinon.assert.callCount(sumaSpy, 1);

    //sumaSpy.should.have.been.calledWith(2, 4);

    //sumaSpy.should.have.returned(5);

    //sumaSpy.should.have.been.calledAfter(consoleSpy);
  });
});
