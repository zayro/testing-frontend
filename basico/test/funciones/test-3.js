// funcionesTesting.js

const esperoQue = ( dato ) => {
  return {
    seaIgualQue: ( esperado ) => {
      if ( dato !== esperado ) {
        throw new Error( `${ dato } es distinto que ${ esperado }` )
      }
      // También podríamos usar 👇
      // return assert.strictEqual( dato, esperado )
    }
  }
}

module.exports = { esperoQue }