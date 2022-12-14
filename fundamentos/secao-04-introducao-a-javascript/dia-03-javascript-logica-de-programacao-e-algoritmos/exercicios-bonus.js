/* Exercícios - bônus */

/* 
Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo:
*/

/*
1. Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

n = 5

*****
*****
*****
*****
*****

*/

let asteriscos = '*';
const n = 5;

for (let index = 0; index < n; index += 1) {
  console.log(asteriscos.repeat(n));
}

/* 
2. Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****

*/

for (let index = 0; index <= n; index += 1) {
  console.log(asteriscos.repeat(index));
}

console.log('');
/* 
3. Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****

*/

for (let index = n - 1; index >= 0; index -= 1) {
  console.log(' '.repeat(index) + asteriscos.repeat(n - index));
}

console.log('');

/* 
4. Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****

*/

for (let index = n - 1; index >= 0; index -= 2) {
  console.log(' '.repeat(index / 2) + asteriscos.repeat(n - index));
}