// Exercício "Para Fixar" 4 (Operadores Lógicos - AND):

const currentHour = 4;
let message = '';

if (currentHour >= 22 && currentHour <= 24) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!';
} else if (currentHour >= 4 && currentHour < 11) {
  message = 'Hmmmm, cheiro de café recém-passado';
} else {
  message = 'Insira um valor entre 4 e 24';
}

console.log(message);

console.log('                                                                ');
console.log('******************** INÍCIO DO EXERCÍCIO 2 *********************');
console.log('                                                                ');

// Exercício "Para Fixar" 4 (Operadores Lógicos - OR):

const weekDay = 'quarta-feira';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if (weekDay === 'sábado' || weekDay === 'domingo') {
  console.log('FINALMENTE, descanso merecido UwU');
} else {
  console.log('Insira uma string com o nome de algum dia da semana');
}

// Resolvendo com Array e For:

const weekDayArray = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira'];
const freeDaysArray = ['sábado', 'domingo'];

const today = 'sábado';

for (let index = 0; index < weekDayArray.length; index += 1) {

  if (today == weekDayArray[index]) {
    console.log('Oba, mais um dia de aprendizado na Trybe!');
  }
}
for (let index2 = 0; index2 < freeDaysArray.length; index2 += 1) {
  if (today === freeDaysArray[index2]) {
    console.log('FINALMENTE, descanso merecido.');
  }
}

// FIM!

console.log('                                                                ');
console.log('******************** INÍCIO DO EXERCÍCIO 3 *********************');
console.log('                                                                ');