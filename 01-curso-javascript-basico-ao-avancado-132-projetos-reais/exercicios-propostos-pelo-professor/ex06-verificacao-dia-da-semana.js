/*Verificação de dia da semana.
 Solicite ao usuário um número representando um dia da semana (1 para domingo, 2 para segunda-feira, etc.).
 Em seguida, exiba o nome do dia correspondente.
*/

const readline = require ('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Insira um número para representar um dia da semana (exemplo: 1 - domingo. 2 - segunda-feira, etc): ', (diaNumerico) => {
    const diaDaSemana = parseInt(diaNumerico);

    if (diaDaSemana === 1){
        nomeDia = 'Domingo';
    }else if (diaDaSemana === 2){
        nomeDia = 'Segunda-feira';
    }else if (diaDaSemana === 3){
        nomeDia = 'Terça-feira';
    }else if (diaDaSemana === 4){
        nomeDia = 'Quarta-feira';
    }else if (diaDaSemana === 5){
    nomeDia = 'Quinta-feira';
    }else if (diaDaSemana === 6){
        console.log(`O dia é: sexta-feira`);
    }else if (diaDaSemana === 7){
        nomeDia = 'Sábado';
    }else{
        nomeDia = 'Número inválido. Por favor,insira um número entre 1 e 7.'
    }

    console.log(`O dia é ${nomeDia}`);

    r1.close();
});