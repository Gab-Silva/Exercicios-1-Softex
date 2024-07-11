let salario = parseFloat(prompt("Informe seu salário atual: "));
if (salario <= 280) {
    let reajuste = salario * 0.2
    let NovoSalario = reajuste + salario
    document.write("O percentual de aumento aplicado: 20%. O valor do aumento: R$" + reajuste + ". Novo salário: R$" + NovoSalario + ".")
}
else if (salario > 280 && salario <= 700) {
    let reajuste = salario * 0.15
    let NovoSalario = reajuste + salario
    document.write("O percentual de aumento aplicado: 15%. O valor do aumento: R$" + reajuste + ". Novo salário: R$" + NovoSalario + ".")
}
else if (salario > 700 && salario <= 1500) {
    let reajuste = salario * 0.10
    let NovoSalario = reajuste + salario
    document.write("O percentual de aumento aplicado: 10%. O valor do aumento: R$" + reajuste + ". Novo salário: R$" + NovoSalario + ".")
}
else {
    let reajuste = salario * 0.05
    let NovoSalario = reajuste + salario
    document.write("O percentual de aumento aplicado: 5%. O valor do aumento: R$" + reajuste + ". Novo salário: R$" + NovoSalario + ".")
}