/* Exercício 01 - praticar entrada de dados.

Objetivo: 
 Cadastro Básico de Usuário.
Proposta Perguntas Sugeridas:
 Qual é o seu nome completo?
 Qual é a sua idade?
 Qual é o seu e-mail?
 Qual é a sua cidade natal?
Resoltado final:
 Imprimir respostas do usuário.
*/

const readline = require('readline');

const receberCadastro = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cadastrarUsuario(perguntaUsuario){
    return new Promise ((resolve) => {
        receberCadastro.question(perguntaUsuario, (resposta) => {
            resolve(resposta);
        });
    });
}

async function preencherCadastro(){
    const nomeCompleto = await cadastrarUsuario('Digite o seu nome completo: ');
    const idade = await cadastrarUsuario('Digite a sua idade: ');
    const email = await cadastrarUsuario('Digite o seu e-mail: ');
    const cidade = await cadastrarUsuario('Digite a sua cidade de origem: ');

    console.log(`
        Cadastro realizado com sucesso! Aqui estão as informações do usuário: \n
        Nome completo: ${nomeCompleto}
        Idade: ${idade}
        E-mail: ${email}
        Cidade: ${cidade}`);

        receberCadastro.close();
}

preencherCadastro();