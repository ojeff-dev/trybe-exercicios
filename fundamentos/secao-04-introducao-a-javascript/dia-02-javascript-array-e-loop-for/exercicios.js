/* Lidando com Arrays 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

*/

/* 1. Percorra o array imprimindo todos os valores nele contidos com a função console.log(); */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

/* 2. Some todos os valores contidos no array e imprima o resultado; */

let totalSoma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    totalSoma += numbers[index];
}
console.log(totalSoma);

/* 3. Calcule e imprima a média aritmética dos valores contidos no array; */

console.log(totalSoma / numbers.length);