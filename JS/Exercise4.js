let nome = prompt("Digite seu nome: ");
let cargo = prompt("Qual o seu cargo exercido na empresa?");
let salario = parseFloat(prompt("Informe o salário atual: "));
let reajuste = parseFloat(prompt("Qual o percentual de reajuste?"));
let percentual = reajuste / 100;
let novosalario = (salario * percentual) + salario;
alert(novosalario);