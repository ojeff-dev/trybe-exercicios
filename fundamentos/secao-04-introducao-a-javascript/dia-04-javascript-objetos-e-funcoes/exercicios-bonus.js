/* 

Exercício 1

(Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

Dicas:

Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:

| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |


Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

*/

console.log('');
console.log('Exercício 1');
console.log('');

const convertRoman = (romanNum) => {
  const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let resultado = 0;

  for (let index = 0; index < romanNum.length; index += 1) {
    if (index > 0 && roman[romanNum[index]] > roman[romanNum[index - 1]]) {
      resultado += roman[romanNum[index]] - (2 * roman[romanNum[index - 1]]);
    } else {
      resultado += roman[romanNum[index]];
    }
  }
  return resultado;
};

console.log(convertRoman('CM'));


console.log('');
console.log('Exercício 2');
console.log('');

/* 

Exercício 2
- Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

- Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

*/

const vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = (vector) => {
  const pares = [];

  for (let index = 0; index < vector.length; index += 1) {
    const arrayVector = vector[index];
    
    for (let index2 = 0; index2 < arrayVector.length; index2 += 1) {
      
      if (arrayVector[index2] % 2 === 0) {
        pares.push(arrayVector[index2]);
      }
    }
  }
  return pares;
};

console.log(arrayOfNumbers(vector));

/* 

🚀 Exercício 3

A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

*/

console.log('');
console.log('Exercício 3');
console.log('');

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const frutas = {};


for (let index = 0; index < basket.length; index += 1) {
  const itemReferencia = basket[index];
  let contador = 0;

  basket.forEach((item) => {
    if (item === itemReferencia) {
      contador += 1;
      frutas[item] = contador;
    }
  });

  contador = 0;
}

for (let index in frutas) {
  console.log(`Sua cesta possui: ${frutas[index]} ${index}s, `);
}

/* 

Exercício 4

Usando o objeto abaixo, faça o que for pedido a seguir:

- Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.

- Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.

*/
console.log('');
console.log('Exercício 4');
console.log('');

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

const bloco1 = moradores.blocoUm;
const bloco2 = moradores.blocoDois;

bloco2.find((object) => {
  if (object.nome === 'Zoey') {
    console.log(
      `O morador do bloco 2 de nome ${object.nome} ${object.sobrenome} mora no ${object.andar} andar, 
apartamento ${object.apartamento}`
    );
  }
});

console.log('');

for (let index = 0; index < bloco1.length; index += 1) {
  console.log(`${bloco1[index].nome} ${bloco1[index].sobrenome}`);
  console.log(`${bloco2[index].nome} ${bloco2[index].sobrenome}`);
}

console.log('');
console.log('|------------------------------ FIM ------------------------------|');
