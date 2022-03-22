function simpleArraySum(ar) {
  let soma = 0;

  for (let index = 0; index < ar.length; index += 1) {
    soma = soma + ar[index];
  }

  return soma;
}

let numeros = [1, 2, 3,8,9];

console.log(simpleArraySum(numeros));

// index começa no zero, porque quero pegar a posição zero do array

// index precisa ser menor que o tamanho do meu array, o tamanho é três, enquanto index for menor que o tamanho do meu array, ou seja, enquanto o index for menor que três, o laço contiua. É assim, para que ele pegue todas as posições do array, que vai do zero ao dois. 
