// Calcular  e informar o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 80;

let taxaGarcom = 10;

let totalApagar = 0;

totalApagar = valorJantar + ((taxaGarcom/100) * valorJantar);

console.log(`O valor do jantar é R$${valorJantar},00`);

console.log(`O valor da taxa do garçom é R$${(taxaGarcom / 100) * valorJantar},00`);

console.log(`O valor total a pagar é R$${totalApagar},00`);

// ordem do cálculo: primeiro é realizada a divisão, após multiplicação e por último a soma. 


