var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

// Then either:
var expect = chai.expect;
// or:
var assert = chai.assert;
function getPosts(num1, num2) {
  return new Promise(function (resolve, reject) {
    try {
      let sum = num1 + num2;
      if (typeof sum !== "number") {
        throw "los parametros no estan correctos";
      }
      resolve(sum);
    } catch (error) {
      reject(error);
    }
  });
}

describe("Yo como programador necesito probar el funcionando del plugin chai-as-promised para Testear las promesas ", function () {
  it("Valida que la promesa sumar retorne un valor numerico", async function () {
    await getPosts(5, 5).then((r) => {
      expect(r).to.be.a("number");
    });
  });

  it("Valida que se controlan los errores en la promesa", async function () {
    await getPosts(5, "s").should.be.rejected;
  });
});
