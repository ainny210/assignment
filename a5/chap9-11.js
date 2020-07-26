//CHAPTER #09 -10
//Q1
// var city = prompt("enter city name")
// city = city.toLowerCase();

// if (city == 'karachi') {
//     alert('Wlecome to city of lights')
// } else {
//     alert('Welcome to Pakistan')
// }
//Q2
// var gender = prompt("enter gender")
// gender = gender.toLowerCase()

// if (gender == 'male') {
//     alert('GOOD MORNING SIR')
// } else if (gender == 'female') {
//     alert('GOOD MORNING MAAM')
// } else {
//     alert('WELCOME EVERYONE')
// }
//Q3
// var c = prompt("enter signal light")
// c = c.toLowerCase()

// if (c == 'red') {
//     alert('Must Stop')
// } else if (c == 'yellow') {
//     alert('Ready to move')
// } else if (c == 'green') {
//     alert('Move now')
// }
//Q4
// var fuel = +prompt("enter fuel in litres")
// if (fuel < 0.25) {
//     alert("'Please refill the fuel in your car'")
// } else {
//     alert('Enough fuel available')
// }
//Q5
//alert displayed
// var a = 4;
// if (++a === 5) { alert("given condition for variable a is true"); }

//alert not displayed
// var b = 82;
// if (b++ === 83) { alert("given condition for variable b is true"); }
//condition 2 and condition 4 alet dispalyed
// var c = 12;
// if (c++ === 13) { alert("condition 1 is true"); }
// if (c === 13) { alert("condition 2 is true"); }
// if (++c < 14) { alert("condition 3 is true"); }
// if (c === 14) { alert("condition 4 is true"); }
//alert displayed 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
//true alert displayed
// if (true) { alert("True"); }
// if (false) { alert("False"); }
//if ("car" < "cat") { alert("car is smaller than cat"); }

//Q6

// document.write('<h1>Marksheet</h1>' + "<br>")
// var tm = +prompt("enter total marks")
// var ob = +prompt("enter Objaned marks")
// var per = (ob / tm) * 100
// if (per >= 60) {
//     document.write("Tsotal Marks : " + " " + tm + "<br>")
//     document.write("Obtained Marks : " + " " + ob + "<br>")
//     document.write("Percentage : " + " " + per + "<br>")
//     document.write("Grade : " + " B " + "<br>")
//     document.write("Remarks : You need to improve " + "<br>")
// } else if (per >= 70) {
//     document.write("total Marks : " + " " + tm + "<br>")
//     document.write("Obtained Marks : " + " " + ob + "<br>")
//     document.write("Percentage : " + " " + per + "<br>")
//     document.write("Grade : " + " A " + "<br>")
//     document.write("Remarks : Good " + "<br>")
// } else if (per >= 80) {
//     document.write("total Marks : " + " " + tm + "<br>")
//     document.write("Obtained Marks : " + " " + ob + "<br>")
//     document.write("Percentage : " + " " + per + "<br>")
//     document.write("Grade : " + " A-one " + "<br>")
//     document.write("Remarks : Excellent " + "<br>")
// } else {
//     document.write("total Marks : " + " " + tm + "<br>")
//     document.write("Obtained Marks : " + " " + ob + "<br>")
//     document.write("Percentage : " + " " + per + "<br>")
//     document.write("Grade : " + " Fail " + "<br>")
//     document.write("Remarks : Sorry " + "<br>")
// }

//Q7
// var a = 10;
// var b = +prompt("GUESS THE SECRET NUMBER")
// if (b == a) {
//     alert('BINGO ! CORRECT ANSWER')
// } else if ((b == (a + 1)) || (b == (a - 1))) {
//     alert('“Close enough to the correct answer')
// } else {
//     alert('Better luck next time ')
// }

//Q8
// var a = +prompt('enter number')
// c = a % 3;
// if (c == 0) {
//     alert('Number is divisble by 3')
// } else {
//     alert('Number is not divisible by 3')
// }
//Q9
// var a = +prompt("enter number")
// if (a % 2 == 0) {
//     alert('number is even')
// } else if ((a - 1) % 2 == 0) {
//     alert('number is odd')
// }
//Q10
// var T = +prompt("Enter the Temperature")
// if (T > 40) {
//     alert('“It is too hot outside')
// } else if (T > 30) {
//     alert('The Weather today is Normal')
// } else if (T > 20) {
//     alert('Today’s Weather is cool')
// } else if (T > 10) {
//     alert('OMG! Today’s weather is so Cool')
// } else {
//     alert('Its Freezing')
// }
//Q11
//IN HTML NAME() CHAP 9-10)