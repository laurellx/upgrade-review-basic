// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array.
//La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.
// Sugerencia de array:

const array = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (arr, i1, i2) => {
  let a = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = a;
};
swap(array, 1, 3);

console.log(array);
