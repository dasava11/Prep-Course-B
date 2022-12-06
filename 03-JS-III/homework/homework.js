// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:

    var n = 1
    var suma = 0
    while (n <= 10) {
      suma = suma + n; 
      n = n + 1; 
    }
    return suma; 
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:

  // var ArrayPares = []

  // for(let i=0; i<array.length; i++) {
  //   if(array[i]%2 === 0)
  //   ArrayPares.push(array[i]);
  // }
  // return ArrayPares;

  var pares = array.filter((elemento) => elemento%2 === 0);
  return pares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:


  // var ArrayPotencia = []
  // for(let i=0; i<array.length; i++) {
  //   ArrayPotencia.push(array[i]*array[i])
  // }
  // return ArrayPotencia;

  var potencia = array.map((num) => num ** 2);
  return potencia; 
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:


  // var suma = 0
  // for(let i=0; i<array.length; i++) {
  //   suma = suma + array[i]
  // }
  // return suma;

  var suma = array.reduce((acumulador, numero) => acumulador + numero); 
  return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var n = num.toString();
  return n.length;

}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
