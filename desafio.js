// Ao efetuar a compra de sua refeição no Ifood o sistema, após confirmação do pagamento, envia seu pedido ao restaurante, que ao aceitá-lo registra esse momento e lhe retorna o horário de previsão da sua entrega. Esse recurso, apesar de interessante começou a gerar uma quantidade significativa de reclamações na Central de Atendimento, pois os clientes ficaram um pouco confusos com os horários indicados para a entrega. Ao investigar o problema, o time de desenvolvimento entendeu que os horários apresentados estavam no formato de 12hs (AM/PM), sendo que o correto seria utilizar o formato de 24hs. Sua missão: criar um algoritmo capaz de fazer essa conversão! Para isso, crie uma função que receba um horário qualquer, respeitando o formato 12hs (06:15:25PM) e retorne o equivalente (18:15:25).
function formatTime(time) {
    let hora = Number(time.substring(0, 2))
    const min = Number(time.substring(3, 5));
    const segundo = Number(time.substring(6, 8));
    if (time.substring(8, 10)===("PM")) {
        hora+=12;
        newTime =`${hora}:${min}:${segundo}`       
        return newTime;
    }
    else {
        newTime =`${hora}:${min}:${segundo}` 
        return newTime
    }
}
const formatedTime = formatTime("06:15:25PM")
console.log(formatedTime)



// Desafio: Quantidade de Palavras
// Neste desafio, sua missão será encontrar a quantidade de palavras existentes na seguinte frase:
// "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"
// Como você pode perceber, essa frase está no padrão camelCase, portanto cada nova palavra é representada pela inicial em maiúscula. Crie uma função que receba uma string e retorne a quantidade de palavras existentes!
const someString = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
function countWords(someString) {
    const charUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let words = 1; // a primeira palavra é minuscula
    if (someString === null || someString === '') {
        return(`A string está vazia`);
    } else {    
        for (char of someString) {
            if (charUpperCase.includes(char)){
                words++
            }
        }
    }
    return words

}

let howManyWords = countWords(someString);
console.log(howManyWords)



// Desafio: Número Solitário
// Neste desafio, seu objetivo é encontrar o(s) número(s) solitário(s) (que não se repete), a partir do array de números fornecido. Para resolver, crie uma função que recebe um array com os seguintes números:
// [12, 17, 15, 19, 22, 17, 19, 12]
// E retorne os que não estiverem repetidos.
 const numberArray = [12, 17, 15, 19, 22, 17, 19, 12];
 function uniqueNumbers(numberArray){
    let uniqueNumbers = [];
    for (num of numberArray){
        let howManyNum = numberArray.filter(n => n === num);
        if (howManyNum.length === 1) {
            uniqueNumbers.push(num)
        }        
    }
    return uniqueNumbers        
 }


const uNumbers = uniqueNumbers(numberArray);
console.log(uNumbers)
 



// Qual é a saída do código a seguir?
// let n = 4;
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log(j);
//     }
// }
// e. 1 1 2 1 2 3 1 2 3 4

// Qual é o resultado da expressão booleana abaixo?
// !(true && false) || (false && true)
//  (verdadeiro || falso) -> true
// a. true


// Qual o valor da saída do código abaixo?
// let x = 0;
// let a = 0;
// let b = -5;
// if (a > 0) {
//     if (b < 0) {
//         x = x + 5;
//     } else if (a > 5) {
//         x = x + 4;
//     } else {
//         x = x + 3;
//     }
// } else {
//     x = x + 2;
// }
// console.log(x);
// b) 2
