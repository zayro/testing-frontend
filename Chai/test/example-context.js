/* test/sum.js */

var sum = require('../sum');
var expect = require('chai').expect;

describe('#sum() Success', function () {
  context('without arguments', function () {

    it('should return 0', function () {
      expect(sum()).to.equal(0)
    })

  })

  context('with number arguments', function () {

    it('should return sum of arguments', function () {
      expect(sum(1, 2, 3, 4, 5)).to.equal(15)
    })
  });

});

describe('#Sum() Error', function () {


  context('with non-number arguments', function () {
    it('should throw error', function () {

      expect([1, 2, 3, 4, 5].reduce((a, b) => a + b, 0)).to.equal(15);
      expect(function () {
        sum(1, 2, '3', [4], 5)
      }).to.throw(TypeError, 'sum() expects only numbers.')
    })
  })

})