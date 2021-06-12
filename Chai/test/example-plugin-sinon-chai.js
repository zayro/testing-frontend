var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);

function hello(name, myCallback) {
  myCallback("hello " + name);
}

function display(some) {
  console.log(" ----------------------- ");
  console.log(" resultado " + some);
  console.log(" ----------------------- ");
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

// myCalculator(5, 5, display);
// hello("hola", display);
let cb;
describe("Yo como programador necesito probar el funcionando del plugin sinon-chai para Testear las funciones callBack ", function () {
  beforeEach(function () {
    cb = sinon.spy();
  });

  it("validar callBack de una funcion que retorna un texto", function () {
    hello("foo", cb);

    cb.should.have.been.calledWith("hello foo");
  });

  it("validar callBack de la Funcion Suma", function () {
    myCalculator(5, 15, cb);

    cb.should.have.been.calledWith(20);
  });

  it("validar callBack de la Funcion de validar", function () {
    //    validar(12, cb);
    myCalculator(5, 5, cb);

    // cb.should.have.callCount(1);
    cb.should.have.been.calledWith(10);
  });
});
