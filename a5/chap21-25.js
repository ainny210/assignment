//Q1
// var a = prompt("enter first name")
// var b = prompt("enter last name ")
// var c = a + b;
// alert("welcome to my site" + c)
//     // Q2
// var a = prompt("enter your phone model name")
// c = a.length;
// alert(c)
//Q3
// var a = "Pakistani"
// var b = a.indexOf('n')
// alert(b)
// Q4
// var a = "Hello World"
// var b = a.lastIndexOf('l')
// alert(b)
//     // Q5
// var a = "Pakistani"
// var b = a.charAt(3)
// alert(b)
// Q6
// var a = prompt("enter first name ")
// var b = prompt("enter last name ")
// var c = a.concat(b)
// alert("welcome to my site" + " " + c)
// Q7
// var a = "hydrabad"
// var b = a.replace('hydr', 'islam')
// alert(b)
// Q8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var b = message.replace(/and/g, '&')
// alert(b)
// Q9
// var a = "472"
// var b = Number(a)
// document.write("value :" + a + "<br>")
// document.write("type : string" + "<br>")
// document.write("value :" + b + "<br>")
// document.write("type : numer" + "<br>")
// Q10
// var a = prompt("input ")
// var b = a.toUpperCase()
// alert(b)
// Q11
// var a = prompt("input ")
// var b = a.charAt(0).toUpperCase() + a.slice(1)
// alert(b)
// Q12
// num = 35.36;
// num = num.toString();
// newNum = num.split('.').join("");
// document.write("Number: " + num);
// document.write("<br>");
// document.write("Result: " + newNum);

// Q13
// var a = prompt("enter name")

// for (var i = 0; i < a.length; i++) {
//     if (a.charCodeAt(i) == '33' || a.charCodeAt(i) == '44' || a.charCodeAt(i) == 46 || a.charCodeAt(i) == 64) {
//         alert("please enter valid user name")
//     }
// }
// // Q14
// var a = prompt("enter product name")
// var b = a.toLowerCase()
// var c = ["cake", "apple pie", "cookie", "chips", "patties"]
// var match = "no"
// for (var i = 0; i < c.length; i++) {
//     if (b == c[i]) {
//         match = "yes"
//         document.write(a + " " + "available at index" + " " + i + " " + "in our bakery")

//     }
// }
// if (match == "no") {
//     document.write("we are sorry" + " " + a + " " + "not available " + " " + "in our bakery")

// }


// Q15
// var a = prompt("enter product name")
// var b = a.length

// var c = a.slice(1)
// var match = "no"


// if (b < 6) {
//     alert("password should be at least 6 characters long ")
//     console.log("pehla if")
// } else if (b >= 6) {
//     if (a.charCodeAt(0) == 48 || a.charCodeAt(0) == 49 || a.charCodeAt(0) == 50 || a.charCodeAt(0) == 51 || a.charCodeAt(0) == 52 || a.charCodeAt(0) == 53 || a.charCodeAt(0) == 54 || a.charCodeAt(0) == 55 || a.charCodeAt(0) == 56 || a.charCodeAt(0) == 57) {
//         alert("password should not start with a number ")
//         console.log("dsra if")
//         match = "yes"
//     }
//     if (match == "no") {
//         console.log("teesra if")
//         for (var i = 0; i < c.length; i++) {
//             console.log("loop")
//             if (c.charCodeAt(i) == 48 || c.charCodeAt(i) == 49 || c.charCodeAt(i) == 50 || c.charCodeAt(i) == 51 || c.charCodeAt(i) == 52 || c.charCodeAt(i) == 53 || c.charCodeAt(i) == 54 || c.charCodeAt(i) == 55 || c.charCodeAt(i) == 56 || c.charCodeAt(i) == 57) {
//                 console.log(c.charCodeAt(i))
//                 match = "yes"
//             }
//         }
//         if (match == "no")
//             alert("password should contain alphabets and numbers ")
//     }

// }



// Q16

// var str = "University of Karachi";
// var res = str.split('');
// for (var i = 0; i < str.length; i++)
//     document.write(res[i] + "<br>")
// Q17
// var a = prompt("enter a word")
// var b = a.length - 1
// b = a.charAt(b)
// document.write("user input : " + " " + a + "<br>")
// document.write("Last character of input : " + " " + b)
//Q18
// var a = "The quick brown fox jumps over the lazy dog"
// var b = a.toLowerCase().split(' ')
// var count = 0;
// for (var i = 0; i < a.length; i++) {
//     if (b[i] == 'the') {
//         count++;
//     }
// }
// document.write("Text :" + " " + a + "<br>")
// document.write("There are" + " " + count + " " + "occurances of the word 'the'")