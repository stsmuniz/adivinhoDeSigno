
function sorteiaSigno() {
	var signo = [	'Áries', 'Touro', 'Gêmeos', 'Câncer',	'Leão', 'Virgem', 'Libra', 'Escorpião',	'Sagitário', 'Capricórnio', 'Aquário', 'Peixes'];

  return signo[Math.round(Math.random() * 11 )];
}


document.getElementById('sol').innerText = sorteiaSigno();
document.getElementById('ascendente').innerText = sorteiaSigno();
document.getElementById('lua').innerText = sorteiaSigno();