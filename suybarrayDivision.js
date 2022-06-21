let array = [2, 2, 1, 3, 2];
let day = 4;
let month = 2;

function aniversario(array, day, month) {
  let count = 0;
  let sum = 0;

  for (let esquerda = 0; esquerda <= array.length - month; esquerda += 1) {
    for (let direita = 0; direita < month; direita += 1) {
      console.log(`${(sum = sum + array[esquerda + direita])} valor sum`);
      console.log(`${array[esquerda + direita]} posição array`);
    }
    if (sum === day) {
      count += 1;
      console.log(`${count} contagem`);
    }
    sum = 0;
  }
  return count;
}

aniversario(array, day, month);
