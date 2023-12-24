//Para comentar de uma vez, use Ctrl + K e depois Ctrl + C
//Prática: dias da semana
/* 
let diaDaSemana = prompt('Qual o dia da semana?');

 if( diaDaSemana == 'Sábado' ){
     alert('Bom final de semana!');
 }
 if(diaDaSemana == 'Domingo'){
     alert('Bom final de semana! ');
 }
else{
     alert('Boa semana!');
 } */

//Prática: Número negativo ou positivo
/*
 let numero = prompt('Digite um número');
 if(numero > 0){
    alert('Seu número é positivo');
 }  if(numero < 0){
    alert('Seu número é negativo');
    } else{
        alert('Seu número é 0');}
*/
//Prática: Saldo da conta
/* 
let nomeConta = prompt('Informe seu nome');
let saldoConta = prompt('Digite o saldo da sua conta');

 alert(`${nomeConta}, seu saldo é de R$${saldoConta}`); */

//Exercício prática de while
/*
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;


while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    //a soma sempre receberá o valor do número
    soma += numero;
    contador--; // decrementando o contador, assim sabe-se quantas vezes faltará para atingir a condição de saída do while
}

let media = soma / qtdNumeros;

console.log(media); */

//Exercício prática do contador de 1 até 10
/*
let contador = 1;

while(contador < 11){
    console.log(contador);
    contador ++;
} */

//Exercício prática do contador de 10 até 0
/*
let contador = 10;

while(contador >= 0){
    console.log(contador);
    contador --;
} */

//Exercício prática de contagem regressiva
/*
let contador = prompt('Informe um número');
while(contador >=0){
    console.log(contador);
    contador --;
} */

//Exercício prática de contagem progressiva
/*
let contador = prompt('Informe um número');
let fixo = 0;
while(fixo <= contador ){
    console.log(fixo);
    fixo ++;
} */

//Exercício nome no console
/* 
let nomeConsole = prompt('Informe seu nome');
 console.log(`Olá ${nomeConsole}, seja bem-vindo`);
*/

//Exercício nome no alert
/*
let nomeAlert = prompt('Informe seu nome');
alert(`Olá ${nomeAlert}, seja bem-vindo`);
*/

//Exercício soma de valores
/*
let valor1 = 10;
let valor2 = 5;

let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} com ${valor2} resulta em ${resultado}`);
*/

//Exercício de maioridade
/*
let idade = prompt('Informe sua idade');
if(idade >= 18){
    alert('Você é maior de idade');
}else{
    alert('Você é menor de idade');
}
*/

//Exercício de nota para aprovação
/*
let nota = parseInt(Math.random() * 10 + 1);

aprovacao = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(nota);
console.log(aprovacao);
*/

//Exercício Math random de 1 a 10, 100 e 100
/*
numeroTeste = parseInt(Math.random() * 1000) + 1;

alert(`O número aleatório é ${numeroTeste}`);
*/

//Exercício IMC
/*
let peso = parseFloat(prompt('Insira seu peso, lembrando de usar ponto '));
let altura = parseFloat(prompt('Insira sua altura, lembrando de usar ponto '));

function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

let imc = calcularIMC(peso, altura);
let resultado = imc.toFixed(2);
console.log('Seu IMC é: ' + resultado);
*/

//Exercício fatorial
/*
let numeroFatorial = parseInt(prompt('Digite um número inteiro para calcular o fatorial'));
fatorializar(numeroFatorial)

function fatorializar(numeroFatorial){
    
    let fatorial = numeroFatorial;
    let resultado = 1;
    if(numeroFatorial == 0 || numeroFatorial == 1){
        let resultado = 1;
        console.log(resultado)
    } else {
        while(fatorial != 1){
            resultado *= fatorial;
            fatorial --;
            console.log(resultado); 
            
        }
    }
}
*/

//Exercício converter dólar
/*
let dolar = parseFloat(prompt('Informe o valor desejado em dólares para convertar em reais na atual cotação'));
converter(dolar)

function converter(dolar){
    let cotacaoReal = 4.80;
    let conversao = dolar * cotacaoReal;
    let resultado = conversao.toFixed(2);
    let mensagemDolar = dolar > 1 ? 'dólares' : 'dólar';

    console.log(`O valor em reais para ${dolar} ${mensagemDolar} é de R$ ${resultado} reais`)

}
*/

//Exercício medidas retangulares
/*
let altura = parseFloat(prompt('Informe a altura da sala retangular'));
let largura = parseFloat(prompt('Informe a largura da sala retangular'));

calcularMedidas(altura, largura)

function calcularMedidas(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(area)
    console.log(perimetro)

}
*/

//Exercício medidas circulares
/*
let raio = parseFloat(prompt('Informe o raio da sala circular para calcular a área e o perímetro'));

calcularMedidas (raio)

function calcularMedidas (raio){
    let area = 3.14 * Math.pow(raio, 2);
    let per= 2 * 3.14 * raio;
    let perimetro = per.toFixed(2)
    console.log(area)
    console.log(perimetro)


}
*/

//Exercicio tabuada
/*
let numero = parseInt(prompt('Informe um número inteiro para descobrir sua tabuada'));

fazerTabuada(numero);

function fazerTabuada(numero){
    let contador = 0;

    while(contador<= 10){
       let resultado = numero * contador;
       contador ++;
       console.log(resultado);
    }  
}
*/

//Exercícios lista
/*
let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

let listaNomes = []
while(listaNomes.length <= 2){
    let nomes = prompt('Informe um nome');
    listaNomes.push(nomes)
}
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[-1]);
*/

