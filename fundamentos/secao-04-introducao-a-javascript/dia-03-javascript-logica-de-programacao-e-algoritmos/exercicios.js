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