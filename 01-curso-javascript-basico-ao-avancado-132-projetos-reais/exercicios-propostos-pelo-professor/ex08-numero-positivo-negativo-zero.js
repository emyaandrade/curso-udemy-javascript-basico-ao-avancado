/* Verificação de número: positivo, negativo, zero.
Peça ao usuário para inserir um número e determine se é positivo, negativo ou zero. Exiba o resultado correspondente.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira um número: ', (numA) => {
    const numero = parseFloat(numA);

    if (numero > 0){
        console.log(`O número ${numero} é positivo.`);
    } else if (numero === 0){
        console.log(`O número ${numero} é zero.`);
    } else {
        console.log (`O número ${numero} é negativo.`)
    }

    rl.close();
});