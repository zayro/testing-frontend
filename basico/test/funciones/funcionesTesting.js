// funcionesTesting.js

// -
const esperoQue = ( dato ) => {
  return {
    seaIgualQue: ( esperado ) => {
      if ( dato !== esperado ) {
        throw new Error( `${ dato } es distinto que ${ esperado }` )
      }
    }
  }
}

// -
const prueba = ( titulo, funcion ) => {
  try {
    funcion()
    console.log( `✅  · ${ titulo }` )
  } catch ( error ) {
    console.error( `❌  · ${ titulo }` )
    console.error( error )
  }
}

module.exports = { esperoQue, prueba }