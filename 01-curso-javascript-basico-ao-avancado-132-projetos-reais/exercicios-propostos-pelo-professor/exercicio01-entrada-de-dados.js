/* Exercício 01 - Entrada de dados

Objetivo: 
 Escreva um script JavaScript que pergunte o nome, a idade e a cidade do usuário.
 Depois imprima uma mensagem personalizada no console com essas informações.

Passos:
 Use prompt() para solicitar o nome do usuário.
 Use prompt() novamente para solicitar a idade do usuário.
 Use prompt() pela terceira vez para solicitar a cidade do usuário.
 Use console.log() para imprimir uma mensagem contendo todas as informações coletadas.
*/

// const { resolve } = require('path');
const readline = require('readline');

const lerRespostaUsuario = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function perguntasParaUsuario(perguntas){
    return new Promise((resolve) => {

        lerRespostaUsuario.question(perguntas, (respostas) => {

            resolve(respostas);
        });
    });
}

async function receberRespostas(){

    const nomeUsuario = await perguntasParaUsuario ('Digite o seu nome: ');
    const idadeUsuario = await perguntasParaUsuario ('Digite a sua idade: ');
    const cidadeUsuario = await perguntasParaUsuario ('Digite a sua cidade: ');

    console.log(`Respostas do usuário: \n
        Nome: ${nomeUsuario}
        Idade: ${idadeUsuario}
        Cidade: ${cidadeUsuario}
        `);

        lerRespostaUsuario.close();
}

receberRespostas();