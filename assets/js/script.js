//VARIAVEIS
//Uma caixa na memória, onde se garda umvalor

//var => má prática, não utilizar

//lest => 

//const

//let numero = 0;
//console.log(numero)

//const nome = "Alison"
//console.log(nome)

//const boleano = false;
//console.log(boleano)

/*
OPERADORES BÁSICOS
Soma: +
Subtração: -
Multiplicação: *
Divisão: /
*/

// let numero1 = 5;
// let numero2 = 10;

// let soma = 2 + 2;
// let soma2 = numero1 + numero2;

// console.log(soma)
// console.log(soma2)


/*
Operadores lógicos
== / ===
!= / !==
> /=>
< / <=
*/

// console.log(numero1 > numero2)
// console.log(numero1 < numero2)
// console.log(numero1 <= numero2)
// console.log(numero1 > numero2)
// console.log(!(numero1 != numero2))

/*
FUNÇÕES
*/

// //Declaração
// function calcularSoma() {
//     let total = 20 + 20;
//     console.log(total)
// }

// //Execução do comando
// calcularSoma()

//Para executar outros valores usa-se:
// function calcular(dado1, dado2) {
//     let resultado = dado1 + dado2;
//     console.log(resultado)
// } 

// calcular(10, 5);
// calcular(10, 10);
// calcular(1, 1);

/**
 * DOM
 * Document Objet Model
 * 
 */
// const cabecalho = document.querySelector ('.cabecalho')

// console.log(cabecalho)

/**
 * Eventos
 * São ações que ocorrem na tela do usuário
 * 
 * propriedade: addEventListener
 * 
 *elemento.addEventListener('evento', 'função')
 */

//  const tweetar = document.querySelector('button');

//  function imprimirAcao() {
//      console.log('clicou no botão')
//  }

//  tweetar.addEventListener('click', imprimirAcao)



// PARTINDO PARA O PROJETO
/**
 * Primeiros passos
 * 
 * 1° - capturar o conteúdo do textarea para crirar o Tweet
 * 2° - construir o Tweet
 * 3° - imprimir o Tweet
 */

const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button');

 function pegartweet(event) {
    event.preventDefault();
    console.log(textarea.value)

    const tweetTextArea = textarea.value;
    criarTweet = (tweetTextArea)

}

tweetar.addEventListener('click', pegartweet)

//CRIRAR O TWEET
/**
 * PRECISA DE:
 * Texto
 * Nome
 * Foto
 * Nome de usuário
 * Horário
 */

function criarTweet(tweetTexto) {
    //Texto
    console.log(tweetTexto)

    //Objeto
    const tweet = {
        nome: "Daniel",
        foto: "./src/img/user3.png",
        usuario: "@danielkenzie",
        texto: tweetTexto
    }
    console.log(tweet.nome)
}

