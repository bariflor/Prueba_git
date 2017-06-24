var arr = [4,4,5,12];
var num = 9;
arr.push(num);

arr.reduce(function(valorAnterior, valorActual, indice, vector)
 {

  return valorAnterior * valorActual;

 });
console.log(arr.reduce(function(valorAnterior, valorActual, indice, vector)
 {

  return valorAnterior * valorActual;

 }));
