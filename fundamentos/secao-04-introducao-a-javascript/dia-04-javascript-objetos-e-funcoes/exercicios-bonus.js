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
