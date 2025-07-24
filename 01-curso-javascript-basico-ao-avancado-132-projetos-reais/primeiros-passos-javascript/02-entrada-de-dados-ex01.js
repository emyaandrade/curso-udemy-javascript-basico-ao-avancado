// Primeiro é necessário importar o módulo 'readline' no Node.js.
// A função 'require' é usada para incluir módulos que vêm com o Node.js ou são instalados via npm.
// Aqui, estou importando o módulo 'readline' e atribuindo-o à constante 'readline' para poder usar suas funcionalidades.
const readline = require("readline");

// Em seguida, cfriei uma interface usando a função 'createInterface' do módulo 'readline' que acabei de importar.
// essa interface será usada para interagir com o terminal, permitindo fazer perguntas ao usuário e receber respostas.
const r1 = readline.createInterface({

    // 'process.stdin' representa o stream de entrada padrão, ou seja, onde vou receber os dados (nesse caso, teclado do usuário).
    input: process.stdin,

    // 'process.stdout' representa o stream de saída padrão, ou seja, onde vamos exibir os dados (nesse caso, no terminal).
    output: process.stdout

});

// Usei o método 'question' da minha interface 'r1' para fazer a pergunta ao usuário.
r1.question('Qual é o seu nome? ', (resposta) => {

    // Dentro dessa função callback, 'resposta' contém o texto que o usuário digitou no terminal.

    // Aqui vou exibir a mensagem de saudação que inclui a resposta do usuário.
    console.log(`Olá, ${resposta}`);

    r1.close();
})