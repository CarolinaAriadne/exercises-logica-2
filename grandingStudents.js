let arrayNotas = [2, 37, 38];

function grandingStudentes(notas) {
  //   let numbersRounded = [];

  //   for (let index = 0; index < notas.length; index += 1) {
  //     if (notas[index] < 38 && notas[index] % 5 == 0) {
  //       numbersRounded.push(notas[index]);
  //     }

  //     
  //       let multiplesFive = Math.ceil(notas[index] / 5) * 5;

  //       let subtraction = multiplesFive - notas[index];
  //       if (subtraction < 3) {
  //         numbersRounded.push(multiplesFive);
  //       } else {
  //         numbersRounded.push(notas[index]);
  //       }
  //     }
  //   }

  //   return numbersRounded;

  for (let index = 0; index < notas.length; index += 1) {
    if (notas[index] >= 38) {
      if (notas[index] % 5 === 3) {
        notas[index] += 2;
      }
    } else if (notas[index] % 5 === 4) {
      notas[index] += 1;
    }
  }

  return notas;
}

console.log(grandingStudentes(arrayNotas));
