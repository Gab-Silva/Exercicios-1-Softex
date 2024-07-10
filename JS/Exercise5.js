let kmInicial = parseFloat(prompt("Quilometragem inicial: "));
let kmFinal = parseFloat(prompt("Quilometragem final: "));
let litroconsu = parseFloat(prompt("Litros consumidos: "));
let Precocomb = parseFloat(prompt("Preço do combustível: "));
let distancia = kmFinal - kmInicial;
let gasto = litroconsu * Precocomb;
let consumo = distancia / litroconsu;

alert("O carro percorreu " + distancia + "km com R$" + gasto + ". O consumo do carro é de " + consumo + "km com 1 litro de gasolina.");