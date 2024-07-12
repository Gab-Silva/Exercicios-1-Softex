let number1 = parseFloat(prompt("Type the first number: "))
let number2 = parseFloat(prompt("Type the second number: "))

if (number1 > number2) {
    document.write(number1 + " is bigger than " + number2)
}
else if (number2 > number1) {
    document.write(number2 + " is bigger than " + number1)
}
else {
    document.write("Both numbers are of equal value.")
}