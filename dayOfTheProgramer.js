let arrayBissexto = [31, 29, 31, 30, 31, 30, 31, 31];
let arrayNaoBissexto = [31, 28, 31, 30, 31, 30, 31, 31];
let dayProgramerYear = 256;
let year = 2700;
let anoBissexto = false;

function verifyDate(y) {
  if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    anoBissexto = true;
    console.log(" o ano é bissexto");
  } else {
    console.log(" o ano não é bissexto");
  }
}

verifyDate(year);

if (year >= 1700 && year <= 2700) {
  if (anoBissexto) {
    const sumDaysBissexto = arrayBissexto.reduce(
      (acumulador, elemento) => acumulador + elemento
    );

    const dayProgramer = dayProgramerYear - sumDaysBissexto;

    console.log(`${dayProgramer}.09.${year}`);
  }
}

if (year >= 1700 && year <= 2700) {
  if (!anoBissexto) {
    const sumDaysNaoBissexto = arrayNaoBissexto.reduce(
      (acumulador, elemento) => acumulador + elemento
    );
    const dayProgramer2 = dayProgramerYear - sumDaysNaoBissexto;

    console.log(`${dayProgramer2}.09.${year}`);
  }
} else {
  console.log(`O ano digitado não é válido`);
}
