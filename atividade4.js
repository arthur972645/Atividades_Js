let medicamento = prompt("Digite qual é o medicamnto");
let precoM = Number(prompt("Qual é o preço do medicamento: "));

let descontoC = Math.floor((precoM * 100) % 100);
let descontoT = (precoM - descontoC / 100);

alert("O valor do produto é de "+precoM+" e o desconto sera de "+descontoC+ "%\n TOTAL: "+descontoT);

