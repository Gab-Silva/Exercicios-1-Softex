let nome = prompt("Seu nome: ");
let idade = parseFloat(prompt("Sua idade: "));
let nomeMae = prompt("Nome da mãe: ");
let  idadeMae = parseFloat(prompt("Idade da mãe: "));
let nomePai = prompt("Nome do pai: ");
let idadePai = parseFloat(prompt("Idade do pai: "));
let  calculoIdMae = idadeMae - idade;
let calculoIdPai = idadePai - idade;

alert(nome + ", quando você nasceu, " + nomeMae + " tinha " + calculoIdMae + " anos e " + nomePai + " tinha " + calculoIdPai + " anos.")