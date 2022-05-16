let s = 7; // ponto inicial da casa

let t = 10; // ponto final da casa

let a = 4; // localização da árvore apple

let b = 12; // localização da árvore orange

let apples = [2, 3, -4]; // distância que apples caem da árvore apple

let oranges = [3, -2, -4]; // distância que oranges caem da árvore orange

let quantityApples = 0;

let quantityOranges = 0;

function apple(s, t, a, apples) {
  let sumApple = [];

  for (let index = 0; index < apples.length; index += 1) {
    sumApple.push(apples[index] + a);
  }

  for (let index2 = 0; index2 < sumApple.length; index2 += 1) {
    if (sumApple[index2] >= s && sumApple[index2] <= t) quantityApples += 1;
  }

  return quantityApples;
}

function orange(s, t, b, oranges) {
  let sumOrange = [];

  for (let index = 0; index < oranges.length; index += 1) {
    sumOrange.push(oranges[index] + b);
  }

  for (let index2 = 0; index2 < sumOrange.length; index2 += 1) {
    if (sumOrange[index2] >= s && sumOrange[index2] <= t) quantityOranges += 1;
  }

  return quantityOranges;
}

const ap = apple(s, t, a, apples);

const or = orange(s, t, b, oranges);

console.log(
  `Foram ${quantityApples} maçãs que caíram na região da casa e ${quantityOranges} laranjas que também caíram na região da casa`
);
