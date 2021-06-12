// test-3.js

const { suma, resta } = require( '../funcionesMatematicas' )
const { esperoQue } = require( './funciones/funcionesTesting' )

let resultado, esperado

resultado = suma( 2, 3 )
esperado = 5
esperoQue( resultado ).seaIgualQue( esperado )

resultado = resta( 8, 3 )
esperado = 5
esperoQue( resultado ).seaIgualQue( esperado )

console.log( '¡Test3 OK! 👌' )