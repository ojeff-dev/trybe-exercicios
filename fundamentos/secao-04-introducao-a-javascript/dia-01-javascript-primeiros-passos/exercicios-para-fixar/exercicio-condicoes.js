// Exercício "Para Fixar" 3 (Condições If e Else):

const notaCandidato = 85;

if (notaCandidato >= 80 && notaCandidato <= 100) {
  console.log('Parabéns, você foi aprovado(a)!');
} else if (notaCandidato < 80 && notaCandidato >= 60) {
  console.log('Você está na nossa lista de espera');
} else if (notaCandidato < 60) {
  console.log('Você foi reprovado(a)');
} else {
  console.log('Digite um valor entre 1 e 100.');
}