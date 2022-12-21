/* 
TÓPICO 1:

Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
  - Adição (a + b)
  - Subtração (a - b)
  - Multiplicação (a * b)
  - Divisão (a / b)
  - Módulo (a % b)

*/

const a = 8;
const b = 4;

function adicao(){
  return a + b;
}
function subtracao(){
  return a - b;
}
function multiplicacao(){
  return a * b;
}
function divisao(){
  return a / b;
}
function modulo(){
  return a % b;
}
console.log(adicao(), subtracao(), multiplicacao(), divisao(), modulo());

console.log('');
console.log('****************************************');
console.log('');

/* 
TÓPICO 2:

Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

*/

const x = 9;
const y = 10;

function maiorNumero(){
  if(x > y){
    return x + ' é o maior número';
  } else{
    return y + ' é o maior número';
  }
}
console.log(maiorNumero());

console.log('');
console.log('****************************************');
console.log('');

/* 
TÓPICO 3:

Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

*/

const k = 4;
const p = 7;
const v = 3;

function maiorDeTres(){
  if(k > 4 && k > v){
    return k + ' é o maior número dos três';
  } else if(p > k && p > v) {
    return p + ' é o maior número dos três';
  } else {
    return v + ' é o maior número dos três';
  }
}
console.log(maiorDeTres());

console.log('');
console.log('****************************************');
console.log('');

/* 
TÓPICO 4:

Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

*/

function numStatus(num){
  if(num > 0) {
    return num + ' é um número positivo';
  } else if(num < 0) {
    return num + ' é um número negativo';
  } else {
    return num + ' zero';
  }
}
console.log(numStatus(5));

console.log('');
console.log('****************************************');
console.log('');

/* 
TÓPICO 5:

Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

- Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
- Um ângulo será considerado inválido se não tiver um valor positivo.

*/

const angulo1 = 45;
const angulo2 = 45;
const angulo3 = 90;

function verificaTriangulo(){
  if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
    return 'Erro: ângulo(s) menor(es) ou igual a zero.';
  } else if(angulo1 + angulo2 + angulo3 === 180){
    return true;
  } else {
    return false;
  }
}
console.log(verificaTriangulo());

console.log('');
console.log('******************** FIM ********************');
console.log('');