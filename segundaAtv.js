const prompt = require ("prompt-sync")();

var verificaNumero = prompt("Digite um numero");
var total = verificaNumero/2;

if(verificaNumero & 1){
    console.log("Impar");
} else {
    console.log("Par");
}