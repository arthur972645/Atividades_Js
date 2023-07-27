let carro = prompt("Qual modelo do carro: ");
let preco = Number(prompt("Qual é o preco do carro: "));

let entrada = preco * 0.5
let saldo = Math.ceil(entrada /12) 

document.write(`A entrada do veiculo é de ${entrada} que em 12 vezes fica ${saldo} por mes`);