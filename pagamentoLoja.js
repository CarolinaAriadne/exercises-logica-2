// Programa para loja, que leia o preço de um produto e informe as opções de pagamento da loja. A vista com 10% de desconto, e o valor em 3x.


let preco = 60;
let aVista = 10;
let totalAVista = 0;

 totalAVista = ( preco - (aVista / 100) * preco);


 console.log(`Preço R$${preco},00`);

 console.log(`Preço R$${totalAVista},00`);

 console.log(`Ou 3x de R$${preco/3},00`);





