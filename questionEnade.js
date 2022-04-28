// Questão discursiva Enade 2021, Análise e desenvolvimento de sistemas:

// Considere a realização de uma pesquisa com 1000 pessoas para obtenção das seguintes informações: o valor da maior altura, o valor da menor altura, a média das alturas e quantas pessoas tem altura inferior à média das alturas.
// Considere, ainda, que um programador foi selecionado para desenvolver um modelo de código que soluciona o problema automatizando a coleta das alturas e a geração das informaçõES.
// Com base nas informaçõs apresentadas, desenvolva o código adequado para resolver o problema, usando pseudocódigo ou uma linguagem de programação.

let height = [1.8, 1.67, 1.9, 2.03];


const smallPeople = height.sort((a,b) => a - b); // menor altura

const smallPeopleFinal = smallPeople[0];

////


const biggerPeople = height.sort((a,b) => b - a); // maior altura

const biggerPeopleFinal = biggerPeople[0];

////


const calculatedHeight = height.reduce((acumulador, elemento) =>  acumulador + elemento); // soma das alturas (acumular primeira iteração 0 - 0 + 1.8/ retorno da função primeira iteração é 1.8/ segunda iteração o valor de retorno é atribuído ao acumulador, logo: 1.8 + próximo elemento 1.67)

////

const medium =  (calculatedHeight / height.length).toFixed(2); // média das alturas

////

const quantifyPeople = height.filter((hei) => hei < medium); // alturas que são menores que a média de alturas

////

const quantifyPeopleFinal = quantifyPeople.length // quantidade de pessoas que tem a altura menor que a média de alturas


console.log(`A menor altura é a ${smallPeopleFinal}, a maior altura é a ${biggerPeopleFinal}, a média das alturas é de ${medium}, e a quantidade de pessoas que possuem a altura menor que a média de alturas, é ${quantifyPeopleFinal}`);



