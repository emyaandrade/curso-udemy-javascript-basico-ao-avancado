let numero = 10;

if (numero > 15){
    console.log(`O número ${numero} é maior que 15.`);
}else if (numero > 10){
    console.log(`O número ${numero} é maior que 10.`);
}else{
    console.log(`O número é ${numero}.`);
}


let idade = 16;

if (idade >= 18){
    console.log(`O usuário tem ${idade} anos, então é maior de idade, pode prosseguir.`);
} else{
    console.log(`O usuário tem ${idade}, o conteúdo a seguir não é apropriado para essa faixa etária.`);
}


let saldo = 100;

if (saldo > 0){
    console.log(`Seu saldo é positivo. Você tem um total de R$ ${saldo}`);
} else if (saldo < 0){
    console.log(`Seu saldo é negativo. Você está devendo R$ ${saldo}`);
}else{
    console.log(`O seu saldo é zero.`);
}


if (saldo > 0 && idade >= 18){
    console.log(`Você tem ${idade}, e o seu saldo é ${saldo}`);
} else{
    console.log(`A sua idade é ${idade}, e o seu saldo é ${saldo}`);
}