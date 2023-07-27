/*15 -> $5
30 -> $10
35 -> $15*/

let valorTempo, tempoUso, valorFinal, valorUso

valorTempo = Number(prompt("Valor por 15 minutos  de uso $"));
tempoUso = Number(prompt("Tmpo de uso do cliente (min)"));

valorUso = Math.ceil(tempoUso / 15)
valorFinal = valorUso * valorTempo

document.write(`O valor a ser pago vai ser de ${valorFinal}`);