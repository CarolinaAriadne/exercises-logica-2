
let matrizNumeros = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];



let retorno = matrizNumeros.reduce((numero, index) => {
 return   numero + index;
})


console.log(retorno);




// - COM FOR
// let matrizNumeros = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];


// function soma (matriz){
//     let soma = 0;
//     for (let index = 0; index < matriz.length; index +=1){
//        soma = soma + matriz[index];
//     }
//     return soma;
// }

// console.log(soma(matrizNumeros))