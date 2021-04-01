const form = document.querySelector('form');
const container = document.querySelector('.container');
const peso = document.querySelector('.peso')
const altura = document.querySelector('.altura')
const calculaIMC = (event) => {
	event.preventDefault();
	const valuesInput = inputValues(peso, altura);
	const imc = valuesInput.peso / valuesInput.altura ** 2;
	const imcVerificado = verificaIMC(imc);
	const paragraph = createP(imc, imcVerificado);

	container.appendChild(paragraph);
	limpaInput(peso, altura)
}

const inputValues = (peso, altura) => {
	const formInputs = {
		peso: peso.value,
		altura: altura.value
	}
	return formInputs
}

const createP = (imc, msg) => {
	const paragraph = document.createElement('p');
	paragraph.innerText = `Seu imc é : ${imc.toFixed(2)} //  Situação :   ${msg} `;
	return paragraph
}

const verificaIMC = (imc) => {
	if (imc < 18.5) return `Abaixo do peso`
	if (imc <= 24.9) return `Peso normal`
	if (imc <= 29.9) return `Sobrepeso`
	if (imc <= 34.9) return `Obesidade grau 1`
	if (imc < 39.9) return `Obesidade grau 2`
	if (imc > 40) return `Obesidade grau 3`
}

const limpaInput = (peso, altura) => {
	peso.value = ""
	altura.value = ""
	peso.focus()
}
form.addEventListener('submit', calculaIMC);