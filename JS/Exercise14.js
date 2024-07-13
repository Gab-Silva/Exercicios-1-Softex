let userName = prompt("What's your name?")
let age = parseInt(prompt("How old are you?"))

// if (age > 17 && age < 68) {
//     document.write(userName + " you can donate blood.")
// }
// else {
//     document.write(userName + ", you can't donate blood.")
// }

if (age < 18 || age > 67) {
    document.write(userName + " you can't donate blood.")
}
else {
    document.write(userName + ", you can donate blood.")
}