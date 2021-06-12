const delay = require('delay')
var expect = require('chai').expect
describe("Pruebas de Tiempos de cargas", function () {

    //this.timeout(500); 
  
  it("optimo tiempo de ejecucion", async function () {

    var answer = 43;

// AssertionError: expected 43 to equal 42.
    expect(answer).to.equal(43);
    expect(2).to.equal(2);    
      
    });

  it("demasiado tiempo de ejecucion", async function () {    
    console.log('step 1');
    await delay(2010)
     console.log('step 2');
    expect(2).to.equal(2);       
    });

});
