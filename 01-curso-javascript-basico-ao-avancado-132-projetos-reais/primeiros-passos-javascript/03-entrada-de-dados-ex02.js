// Exemplo prático: entrevista simples

// Primeiro, importei o módulo 'readline' do Node.js para ler a entrada (input) do usuário a partir do terminal.
const readline = require('readline');

// Criei uma interface de comunicação com o terminal, usando o método 'createInterface' do módulo 'readline'.
// o módulo 'readline' permite a interação com o terminal (ou qualquer stream de entrada/saída) de forma assíncrona.
// para isso, é preciso configurar duas coisas principais:
// 1. 'input': onde a interface vai receber os dados. Nesse caso, usei 'process.stdin', que representa a entrada padrão do sistema,
// 2. 'output': para onde a interface vai enviar os dados. Usei 'process.stdout', que representa a saída padrão do sistema.
const r1 = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

// Aqui eu criei a função chamada 'fazerPerguntas'. O objetivo dela é fazer uma pergunta ao usuário e esperar a resposta.
// para lidar com a natureza assíncrona dessa operação (não sei quando o usuário vai responder), usei Promises.
// Uma Promise é um objeto usado para operações assíncronas. Ele representa um valor que pode estar disponível agora, no futuro, ou nunca.
function fazerPergunta(pergunta){

    // A função retorna uma nova Promise. A Promise recebe uma função como argumento, essa função é chamada de executor.
    // O executor é chamado imediatamente pela implementação da Promise, passando duas funções: 'resolve' e 'reject'.
    // 'resolve' é uma função que, quando chamada, resolve a Promise com um valor dado.
    // 'reject' é usada para rejeitar a Promise com um
    return new Promise((resolve) => {

        r1.question(pergunta, (resposta) => {

            resolve(resposta);

        });

    });

}


// Declarei uma função assíncrona chamada coletarRespostas.
// Isso significa que dentro desta função, podemos usar a palavra chave 'await' para esperar por Promises de forma síncrona.
async function coletarRespostas(){

    // Fiz perguntas ao usuário e esperei pelas respostas.
    // await faz o código esperar aqui até que o usuário responda.
    const nome = await fazerPergunta('Qual é o seu nome?')
    const corFavorita = await fazerPergunta('Qual é a sua cor favorita?')
    const animalFavorito = await fazerPergunta('Qual é o seu animal favorito?')
    const hobby = await fazerPergunta('Qual é o seu hobby?')
    const pratoFavorito = await fazerPergunta('Qual é o seu prato favorito?')

    // Após coletar todas as respostas, usei 'console.log' para exibi-las no terminal.
    // Usei Template Strings (delimitadas por ``) para incluir variáveis diretamente dentro do texto.
    console.log(`\n Aqui estão as suas respostas: 
        Nome: ${nome}
        Cor favorita: ${corFavorita}
        Animal favorito: ${animalFavorito}
        Hobby: ${hobby}
        Prato favorito: ${pratoFavorito}
        `);

        r1.close();
}

coletarRespostas();