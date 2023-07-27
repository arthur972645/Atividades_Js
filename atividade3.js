let  precoKg = Number(prompt("QUal éo preco por Kg: "));
let  consumo = Number(prompt("Quantas gramas deu seu consumo: "));

let preco = (consumo * precoKg) / 1000

document.write(`O valor do seu prato: ${preco} reais`);