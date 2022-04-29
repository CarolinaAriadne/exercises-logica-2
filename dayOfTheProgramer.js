let arrayBissexto = [31, 29, 31, 30, 31, 30, 31, 31];
let arrayNaoBissexto = [31, 28, 31, 30, 31, 30, 31, 31];
let dayProgramerYear = 256;
let year = 1988;
let anoBissexto = false;

function verifyDateBissexto(y) {
  if (year < 1700 || year > 2700) {
    console.log("O ano não é válido, digite um ano entre 1700 e 2700");
  }
  if (year >= 1700 && year <= 1917) {
    if (year % 4 === 0) {
      anoBissexto = true;
    } else if (year > 1917)
      if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
        anoBissexto = true;
      }
  }
}

verifyDateBissexto(year);

function verifyDateProgramer() {
  if (anoBissexto) {
    const sumDaysBissexto = arrayBissexto.reduce(
      (acumulador, elemento) => acumulador + elemento
    );

    const dayProgramer = dayProgramerYear - sumDaysBissexto;

    console.log(`${dayProgramer}.09.${year}`);
  }

  if (!anoBissexto && year >= 1700) {
    const sumDaysNaoBissexto = arrayNaoBissexto.reduce(
      (acumulador, elemento) => acumulador + elemento
    );
    const dayProgramer2 = dayProgramerYear - sumDaysNaoBissexto;

    console.log(`${dayProgramer2}.09.${year}`);
  }
}

verifyDateProgramer();
