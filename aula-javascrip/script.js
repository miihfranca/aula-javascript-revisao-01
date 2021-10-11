/* 
1) Exibir no console o resultado das seguintes validações, dado o valor da variável _numero:

a) Se o valor for menor que zero, mostrar: O valor número é um Número negativo.

b) Se o valor for maior ou igual a zero, mostrar: O valor número é um Número positivo.
 */

var _numero = ();

function numeroNP(_numero){
    if (_numero < 0){
        console.log("O valor " + _numero + " é um Número negativo.");
    }else if( _numero >= 0){
        console.log("O valor " + _numero + " é um Número positivo.");
    } else{
        console.log("Digite um número válido.");
    }
}
numeroNP(12)


/* 
2) Criar uma função em javascript que receba três parâmetros numéricos valor A, valor B e valor C, validar se:

a) O (valor A  + valor C)  é maior que valorB

i) Se for, exibir no console os valores de valor A + Valor C e a soma deles.

ii) Se não for, exibir no console que os valores de valor A + Valor C é igual ao valor B.
*/

function valores(valorA, valorB, valorC){
    let resultado = valorA + valorC;

    if(resultado > valorB){
        console.log(valorA + " + " + valorC + " = " + resultado);
    } else{
        console.log(valorA + " + " + valorC + " = " + valorB);
    }
}

valores(7, 4, 1)


/*
3) Os alunos da turma de Front-end estão estudando em horários diferentes:

a) Se o horário for o matutino, mostrar a mensagem "Bom Dia!".

b) Se o horário for vespertino, mostrar "Boa Tarde!".

c) Se o horário for noturno, mostrar "Boa Noite!".

d) Se não houver informação, mostrar  "Valor Inválido!".
*/

function horario(turno){
    switch(turno){
        case "matutino":
            console.log("Bom Dia!")
            break;
        case "vespertino":
            console.log("Boa Tarde!")
            break;
        case "noturno":
            console.log("Boa Noite!")
            break;
        default:
            console.log("Valor Invalido")
    }
}