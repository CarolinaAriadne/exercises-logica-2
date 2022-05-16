let numbers = [1, 3, 2, 6, 1, 2];

let divisorNumber = 3;

function divisibleSumPairs(n, d) {
  let quantity = 0;

  for (let esquerda = 0; esquerda < n.length; esquerda += 1) {
    for (let direita = esquerda + 1; direita < n.length; direita += 1) {
      if ((n[esquerda] + n[direita]) % d === 0) {
        quantity += 1;
      }
    }
  }
  console.log(quantity)
  return quantity  
  
}

divisibleSumPairs(numbers, divisorNumber);
