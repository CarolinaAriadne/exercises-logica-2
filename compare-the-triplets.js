let pontosAlice = [5, 6, 7];
let pontosBob = [3, 6, 10];

function compareTriplets(pAlice, pBob) {
  let somaPontosAlice = 0;
  let somaPontosBob = 0;

  for (let index = 0; index < pAlice.length; index += 1) {
    if(pAlice[index] > pBob[index]){
        somaPontosAlice += 1;
    }else if(pAlice[index] < pBob[index]){
        somaPontosBob += 1;
    }
  }
   return [somaPontosAlice,somaPontosBob];
}

const resultado = compareTriplets(pontosAlice, pontosBob);

console.log(resultado);
