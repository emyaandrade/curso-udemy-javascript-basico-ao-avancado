/* Calculadora Simples:
 Crie uma calculadora que solicita dois números e uma operação matemática (+, -, *, /) ao usuário.
 Execute a operação e exiba o resultado.
*/

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Insira o primeiro número: ', (numA) =>{

    r1.question ('Insira a operação que deseja fazer: + (adição), - (subtração), * (multiplicação), / (divisão): ', (operacaoMatematica) => {

        r1.question('Insira o segundo número: ', (numB) =>{

            const num1 = parseFloat (numA);
            const operacao = operacaoMatematica;
            const num2 = parseFloat (numB);

            if (operacao === '+'){
                resultadoOperacao = num1 + num2;
            } else if (operacao === '-'){
                resultadoOperacao = num1 - num2;
            } else if (operacao === '*'){
                resultadoOperacao = num1 * num2;
            } else if (operacao === '/'){
                if (num2 !== 0){
                    resultadoOperacao = num1 / num2;     
                } else {
                    resultadoOperacao = 'Erro: divisão por zero não é permitida.'
                }
            } else {
                resultadoOperacao = 'Operação inválida. Insira um símbolo válido para a operação que deseja realizar e tente novamente'
            }

            console.log (`Aqui está a operação que você digitou e o resultado: ${num1} ${operacao} ${num2} = ${resultadoOperacao}.`)

            r1.close();
        });
    });
});