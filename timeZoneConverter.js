let minutos = 28;
let hourBrasil = 22;
let hourFranca = hourBrasil + 5;

// if(hourFranca > 24){
//     hourFranca = hourFranca - 24;
// }


hourFranca > 24 ? hourFranca = hourFranca - 24 : hourFranca;

console.log(`Hora no Brasil ${hourBrasil}:${minutos} 
e Hora na França ${hourFranca}:${minutos}`);