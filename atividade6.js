const nomeProduto = prompt("Digite o nome do produto: ");
const precoProduto = Number(prompt("Digite o precodo produto: "));

const desconto = (precoProduto / 2).toFixed(2)
const valorFinal = ((precoProduto * 8) - desconto).toFixed(2)

alert(`Valor final da compra $${valorFinal}`);