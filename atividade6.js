let nome = prompt("Nome do produto: ");
let preco = Number(prompt("Preço do produto: "));
let quantidade = Number(prompt("Quantidade de produtos: "));

let precoT = preco * 3;
let desconto = precoT * 0.5;

document.write(`O valor do descontos será de ${desconto} reais e o preço final sera de ${precoT - desconto}`);