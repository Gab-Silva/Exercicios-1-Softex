let n1 = parseInt(prompt("First number: ")) 
let n2 = parseInt(prompt("Second number: "))
let n3 = parseInt(prompt("Third number: "))

if (n1 == n2 && n2 == n3) {
  document.write("All numbers have the same value.")
}
else if (n1 == n2 && n2 > n3) {
  document.write(n1 + " and " + n2 + " are equal. " + n3 + " is the lowest number.")
}
else if (n1 == n3 && n3 > n2) {
  document.write(n1 + " and " + n3 + " are equal. " + n2 + " is the lowest number.")
}
else if (n1 < n2 && n2 == n3) {
  document.write(n2 + " and " + n3 + " are equal. " + n1 + " is the lowest number.")
}
else if (n1 > n2 && n2 > n3) {
  document.write(n1 + " is the bigger value and " + n3 + " is the lower value.")
}
else if (n1 > n3 && n3 > n2) {
  document.write(n1 + " is the bigger value and " + n2 + " is the lower value.")
}
else if (n2 > n1 && n1 > n3) {
  document.write(n2 + " is the bigger value and " + n3 + " is the lower value.")
}
else if (n2 > n3 && n3 > n1) {
  document.write(n2 + " is the bigger value and " + n1 + " is the lower value.")
}
else if (n3 > n2 && n2 > n1) {
  document.write(n3 + " is the bigger value and " + n1 + " is the lower value.")
}
else if (n3 > n1 && n1 > n2) {
  document.write(n3 + " is the bigger value and " + n2 + " is the lower value.")
}
else {
  document.write("Type only numbers.")
}