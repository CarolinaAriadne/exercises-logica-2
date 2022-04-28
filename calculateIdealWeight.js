
let heigth = 1.80;

let weigth = 0;

let sexo = 'feminino';


if(sexo === 'masculino'){
  weigth =  22 * Math.pow(heigth, 2)
}else{
    weigth = 21 * Math.pow(heigth,2)
}

// o 2, é qual potência quero. Se tivesse que ser ao cubo, teria que ser colocado 3 por ex.

console.log(`Seu peso ideal é ${weigth.toFixed(1)} kg`);


