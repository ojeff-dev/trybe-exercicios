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

/* 4. Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”; */

if (totalSoma / numbers.length > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

/* 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o; */

let maiorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }
}
console.log(`${maiorValor} é o maior valor do array`);

/* 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”; */

let valoresImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    valoresImpares += 1;
  }
}
if (valoresImpares !== 0) {
  console.log(`Existe(m) ${valoresImpares} valor(es) ímpar(es) no array`);
} else {
  console.log('nenhum valor ímpar encontrado.');
}

/* 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o; */

let menorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}
console.log(`${menorValor} é o menor valor do array`);

/* 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; */

for (let index = 1; index <= 25; index += 1) {
  console.log(index);
}

/* 9. Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2. */

for (let index = 1; index <= 25; index += 1) {
  console.log(index / 2);
}