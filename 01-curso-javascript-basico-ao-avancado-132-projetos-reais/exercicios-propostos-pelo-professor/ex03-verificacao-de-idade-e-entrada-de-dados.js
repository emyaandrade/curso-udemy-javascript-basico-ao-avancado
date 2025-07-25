/*Exercício 03: operadores lógicos e if
 Escreva um programa que peça ao usuário sua idade e verifique se ele é maior ou igual a 18 anos. Se for, exiba "Você é maior de idade", caso contrário, exiba "Você é menor de idade."
*/

// importei o módulo 'require', que é a interface para lerdados da entrada padrão (stdin) e escrever na saída padrão (stdout) em aplicações Node.js
// esse módulo é útil para criar um programa interativo que lê entrada do usuário.
const readline = require('readline');

// aqui eu criei uma interface usando 'readline.interface'. Essa interface nos permite interagir com o usuário.
// Especifiquei 'process.stdin' como entrada input. Significa que é para ler dados que o usuário digita no terminal.
// Especifiquei 'process.stdout' como saída padrão. Ou seja, os dados ou mensagens devem ser mostrados ao usuário no terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// usei o método 'question' para fazer uma pergunta ao usuário.
// quando o usuário responde, a resposta é passada como argumento para a função callback (a função dentro dos parênteses seguintes).
rl.question('Insira a sua idade: ', (idade) => {

    //dentro da função callback, converti a resposta do usuário para um número, pois ela é recebida como string.
    // usei 'parseInt' para fazer a conversão, para poder trabalhar com a idade como um valor numérico.
    const idadeUsuario = parseInt(idade);

    //aqui verifiquei se a idade numérica convertida é maior ou igual a 18 para seguir a lógica proposta pelo exercício.
    if (idadeUsuario >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.")
    }

    // após processar a resposta do usuário, chamei 'rl.close()' para fechar a interface rl.
    // isso é necessário para terminar o programa, porque a interface mantém o processo Node.js aberto enquanto espera por entrada.
    rl.close();
});