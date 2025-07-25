/*Exercício 04: Verificação de número par ou ímpar
 Crie um programa que solicita um número ao usuário e verifica se é par ou ímpar. Se for par, exiba "o número é par", caso contrário exiba "o número é ímpar".
*/

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Insira um número: ', (numero) => {
    const numeroEscolhido = parseInt(numero);

    // usei o operador módulo '%' que retorna o resto da divisão.
    // se o resto da divisão for 0, o número é par.
    if(numeroEscolhido % 2 === 0){
        console.log(`O número ${numeroEscolhido} é par.`);
    } else {
        console.log(`O número ${numeroEscolhido} é ímpar.`)
    }

    r1.close();
});