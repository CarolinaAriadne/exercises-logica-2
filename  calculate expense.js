// let agua = 10;
// let luz = 20;
// let comida = 50;

// let totalExpense = agua + luz + comida;

let salario = 200;

// let sobra = salario - totalExpense;

// console.log(`Recebi o salário de $${salario} reais, tive um total de despesa na quantia de $${totalExpense} reais, e após o pagamento das despesas, sobrou $${sobra} reais.`)

let gastos = {
    'agua': 10,
    'luz': 20,
    'comida': 50,
};

 const sumExpenses = Object.values(gastos).reduce((valor1 , valor2) => valor1 + valor2) // Ob values retorna um array


console.log(`Salário é igual a $${salario} reais, o total de gastos é $${sumExpenses} reais, e quanto irá sobrar será $${salario - sumExpenses} reais`)