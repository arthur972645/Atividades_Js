let nomeM, preco, precoD

nomeM = prompt("Digite o nome do medicamento");
preco = Number(prompt(`Digite o valor adicional do medicamento ${nomeM}`));

precoD = Math.floor(preco * 2);

document.write(`Total: ${precoD}`);