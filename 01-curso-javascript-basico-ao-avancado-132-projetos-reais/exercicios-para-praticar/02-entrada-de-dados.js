/* Exercício 02 - praticar entrada de dados.

Objetivo: 
 Pedido de Comida Online.
Proposta Perguntas Sugeridas:
 Qual pizza você gostaria (ex: Calabresa, Quatro Queijos, Frango com Catupiry)?
 Quantas pizzas você quer?
 Gostaria de refrigerante (sim/não)? Qual refrigerante (ex: Coca-Cola, Guaraná)?
 Qual é o seu endereço de entrega?
Resoltado final:
 Imprimir respostas do usuário.
*/


const readline = require('readline');

const fichaPedido = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

function receberPedido(pedidoCliente){
    return new Promise((resolve) => {
        fichaPedido.question(pedidoCliente, (resposta) => {
            resolve(resposta);
        });
    });
}

async function anotarPedidoCliente(){
    const saborPizza = await receberPedido('Qual o sabor da pizza? ');
    const quantidadePizza = await receberPedido('Quantas pizzas? ');
    const bebidas = await receberPedido('Gostaria de bebidas? ');
    const qualBebida = await receberPedido('Qual a bebida? ');
    const endereco = await receberPedido('Informe o seu endereço completo: ');

    console.log(`Pedido recebido com sucesso. Vamos começar a preparar o seu pedido em instantes! \n
        A sua pizza é de: ${saborPizza}.
        Você pediu um total de ${quantidadePizza} pizza(s).
        Seu pedido de bebida foi: ${bebidas}, a sua bebida é ${qualBebida}.
        O endereço para entrega é: ${endereco}.
        \n
        Tempo estimado de entrega: 50 minutos.
        `);

        fichaPedido.close();
}

anotarPedidoCliente();