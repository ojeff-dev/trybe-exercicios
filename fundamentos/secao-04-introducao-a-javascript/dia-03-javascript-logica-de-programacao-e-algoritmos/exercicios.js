/* 
TÓPICO 1:
Leia atentamente os enunciados e faça o que se pede.

- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
  - O fatorial é representado pelo sinal !
    4! = 4 x 3 x 2 x 1 = 24

- Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
*/

let numeroEscolhido = 10;
let multiplicador = 1;

for(let index = 1; index <= numeroEscolhido; index += 1){
  multiplicador *= index;
}
console.log('O fatorial de ' + numeroEscolhido + ' é: ' + multiplicador);

console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 2:
Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
*/
 let word = 'jefferson';
 let palavraInvertida = '';

 for(let index = word.length - 1; index < word.length && index >= 0; index -= 1) {
  palavraInvertida += word[index];
 }
 console.log(palavraInvertida);

console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 3:

Considere o array de strings abaixo:
  - let array = ['java', 'javascript', 'python', 'html', 'css'];

  - Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for(let index = 0; index < array.length; index += 1) {

  if(array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
  if(array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
  
}
console.log('A maior palavra' + ' é: ' + maiorPalavra + ' e a menor palavra é: ' + menorPalavra);

console.log('');
console.log('*********************************');
console.log('');