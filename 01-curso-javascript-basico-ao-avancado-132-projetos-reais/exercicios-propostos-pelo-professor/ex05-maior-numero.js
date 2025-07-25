/*Exercício 05: Verificação de maior número.
 Peça ao usuário dois números e determine qual é o maior. Exiba o resultado indicando qual número é maior ou se os dois números são iguais.
*/

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Insira o primeiro número: ', (numA) => {

    r1.question('Insira o segundo número: ', (numB) => {

        const num1 = parseFloat(numA);
        const num2 = parseFloat(numB);
        
       if (num1 > num2){
        console.log(`O primeiro número é maior. Pois ${num1} é maior que ${num2}.`);
        } else if (num2 > num1){
            console.log(`O segundo número é maior. Pois ${num2} é maior que ${num1}`);
        } else {
            console.log(`Os dois números digitados foram: ${num1} e ${num2}, sendo assim eles são iguais.`)
        }

        // após realizar a comparação e exibir o resultado, fecha a interface de readline usando 'r1.close()'.
        // é necessário para terminar a entrada do programa e não deixar o terminal pendente.
        r1.close();
    }); 
});


