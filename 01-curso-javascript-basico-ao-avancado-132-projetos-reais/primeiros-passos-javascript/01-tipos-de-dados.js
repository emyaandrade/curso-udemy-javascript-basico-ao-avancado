// 1. Number
let idade = 30;
let preco = 99.99;
console.log("Número (inteiro): ", idade);
console.log("Número (ponto flutuante): ", preco);

// 2. String
let nome = "Ana";
let saudacao = "Olá, Mundo!";
console.log("String: ", nome);
console.log("String: ", saudacao);


// 3. Booleano
let estaLogado = true;
let maiorDeIdade = false;
console.log("Boolean (verdadeiro): ", estaLogado);
console.log("Boolean (falso): ", maiorDeIdade);


// 4. indica a variável que foi declarada sem um valor inicial, o que automaticamente atribui o valor 'undefined'.
// o tipo undefined é usado no JS para indicar que uma variável foi declarada mas ainda não teve um valor atribuído a ela.
let endereco;
console.log("Underfined: ", endereco);


// 5. Null
let salario = null;
console.log("Null: ", salario);

// 6. Symbol
// 'id' é declarada como um 'symbol' com a descrição "id".
// 'Symbol' é um tipo de dados único e imutável usado para criar identificadores únicos para propriedades e objetos.
// cada Symbol é único, mesmo que dois Symbols tenham a mesma descrição.
let id = Symbol("id");
// .toString significa que está fazendo a conversão da variável para texto.
console.log("Symbol: ", id.toString());


// 7. BigInt representa números inteiros muito grandes que não podem ser representados pelo tipo Number.
// números do tipo BigInt são escritos com um 'n' no final para diferenciá-los dos números do tipo Number.
let numeroGrande = 1234567890123456789012345678901234567890123456789n;
console.log("BigInt: ", numeroGrande);