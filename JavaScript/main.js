const quokka = { isAwesome: true, nodeVersion: process.version };

console.log(quokka);
// Função que verifica se o número é par
function isEven(n) {
    return n % 2 === 0;
  }
  
  // Testando com alguns valores
  const num1 = 4;
  const num2 = 7;
  
  isEven(num1); //?
  isEven(num2); //?
  
  // Você também pode usar console.log, mas o "//?" mostra o resultado na linha!
  console.log(`O número ${num1} é par?`, isEven(num1));
  console.log(`O número ${num2} é par?`, isEven(num2));
  
