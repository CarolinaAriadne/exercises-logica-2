let gastos = [5, 10, 15, 30, 40];
let index = 3; // indice  do valor referente ao produto que alguém n consumiu
let sumAndDiviElements = gastos.reduce(
  (acumulador, elemento) => elemento + acumulador
);
let divisaoTotal = sumAndDiviElements / 2;

function bonAppetit(g, i, d) {
  let sum = g.reduce((acumulador, elemento) => elemento + acumulador);
  //   console.log(sum);
  sum = sum - g[i];
  //   console.log(sum);
  let final = sum / 2;
//   console.log(sum);

  sum !== d ? console.log(d - final) : console.log("Bon Appetit");
}

bonAppetit(gastos, index, divisaoTotal);
