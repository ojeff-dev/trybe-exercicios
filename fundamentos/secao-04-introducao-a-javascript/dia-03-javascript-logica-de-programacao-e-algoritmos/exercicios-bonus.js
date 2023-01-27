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
let n = 5;

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

console.log('');
/* 
5. Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******

*/
n = 7;

for (let index = 1; index <= (n - 3); index += 1) {
  const simbolo = '*';
  const espaco = ' '.repeat((n - 3) - index);
  const espacoMeio = index > 1 && index < (n - 3) ? ' '.repeat(2 * index - 3) : '';
  
  if (index === 1) {
    console.log(espaco + simbolo + espaco);
  } else if (index === (n - 3)) {
    console.log(simbolo.repeat(n));
  } else {
    console.log(espaco + simbolo + espacoMeio + simbolo + espaco);
  }

}
// EXERCÍCIO 5 AINDA NÃO FUNCIONA COM 'n' != 7.