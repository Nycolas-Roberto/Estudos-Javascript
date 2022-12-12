//window.alert("Hello world!");
//window.confirm("Deseja continuar aprendendo Javascript?");

/*
let nome = window.prompt("Qual seu Nome?");
alert(nome)
*/

/*
FORMATAÇÃO DE STRING
document.write(`<p>O resultado entre a soma dos números: ${n1}+${n2} = ${s}</p><br>`);
let nome = String(prompt("Qual seu nome?"))
document.write(`<p>Olá ${nome}, seu nome contém ${nome.length} caracteres da forma maiúscula: <strong><mark><i>"${nome.toUpperCase()}"</i></mark></strong> como também da forma minúscula: <strong><mark><i>"${nome.toLowerCase()}"</i></mark></strong></p>`)
*/

let n1 = Number(prompt("Número 01"));
alert(n1.toFixed(2).replace('.',','))

let n2 = Number(prompt("Quantos R$?"));
alert(n2.toLocaleString("pt-br", {style: 'currency', currency: "BRL"}));