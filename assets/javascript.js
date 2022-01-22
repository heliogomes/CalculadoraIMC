
function calcular(){

var nome = document.getElementById('nome').value
var altura = document.getElementById('altura').value
var peso = document.getElementById('peso').value
var resultado = document.getElementById('resultado')

altura = parseFloat(altura)
altura /= 100
peso = parseFloat(peso)

var imc = peso / (altura**2)
var imc = parseFloat(imc.toFixed(2))

if (imc<16){
    resultado.textContent="Olá " + nome + ', seu IMC é: ' + imc + '\nSituação: baixo peso muito grave' 
} else if (imc>=16 && imc<16.99){
    resultado.textContent= "Olá" +  nome + ', seu IMC é:' + imc + '\nSituação: baixo peso grave'
} else if (imc>=17 && imc<18.49){
    resultado.textContent="Olá " + nome + ', seu IMC é: ' + imc + '\nSituação: baixo peso' 
} else if (imc>=18.50 && imc<24.99){
    resultado.textContent="Olá " + nome + ', seu IMC é: ' + imc + '\nSituação: peso normal' 
} else if (imc>=25 && imc<29.99){
    resultado.textContent="Olá " + nome + ', seu IMC é: ' + imc + '\nSituação: sobrepeso'
} else if (imc>=30 && imc<34.99){
    resultado.textContent="Olá " + nome + ', seu IMC é: ' + imc + '\nSituação: obesidade grau 1' 
} else if (imc>=35 && imc<39.99){
    resultado.textContent="Olá " + nome + ', seu IMC é: ' + imc + '\nSituação: obesidade grau 2>'
} else if (imc>40){
    resultado.textContent="Olá " + nome + ', seu IMC é: ' + imc + '\nSituação: obesidade grau 3>' 
}
}