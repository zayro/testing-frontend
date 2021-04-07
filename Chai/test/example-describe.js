var assert = require('chai').assert;
var expect = require('chai').expect;
var numbers = [1, 2, 3, 4, 5];

describe('#Array ', function () { 
     it('is array of numbers', function(){
         expect(assert.isArray(numbers, 'is array of numbers'));
     });

});
