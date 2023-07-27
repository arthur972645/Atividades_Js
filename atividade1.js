let filme = prompt("Digite o nome de um filme: ");
let duracao = Number(prompt("Digite a durção do filme em minutos: "));

let horas = Math.floor(duracao / 60);
let minutos = duracao % 60;

document.write(`O filme ${filme} tem duracao de ${horas} horas e ${minutos} minutos `);
