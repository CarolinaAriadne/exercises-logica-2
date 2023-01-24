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

// function bonAppetit(bill, k, b) {
//   let sum = 0;
//   let final = 0;

//   bill.forEach((price) => {
//     return (sum += price);
//   });
//   sum = sum - bill[k];
//   final = sum / 2;

//   if (final != b) {
//     console.log(b - final);
//   } else {
//     console.log(`Bon Appetit`);
//   }
// }

// console.log(bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288));
