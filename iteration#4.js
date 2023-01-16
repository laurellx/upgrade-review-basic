// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array
// cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.
// Sugerencia de función: function findArrayIndex(array, text) {}
// Ej array: ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

const myArray = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
const testo = "Salamandra";

const findArrayIndex = (array, text) => {
  let isInArray = false;
  let position;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === text) {
      return [true, i];
    }
  }
  return [isInArray, position];
};

const result = findArrayIndex(myArray, testo);
console.log(
  `Is the word in array? ${result[0]}: it's in the position ${result[1]}.`
);
