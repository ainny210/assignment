// chap # 01 (ALERTS)
//q1
// alert("WELCOME TO MY SITE ");
//q2
// alert("Error!Please enter a valid password");
//q3
// alert("Welcome to JS Land...\n Happy Coding");
//q4
// alert("welcome to JS land..")
// alert("happycoding");
// alert("Happy coding \n prevent this page from creating additional dialogs");
//q5
// console.log("Hello...I can run JS through my web browser's console");
// chap # 02 (VARIABLES FOR STRINGS )
// q1
// var username;
// //Q2
// var myname = "QURATULAIN KHALID"
//     //Q3
// var message;
// mesaage = "HELLO WORLD";
// alert(mesaage);
// //Q4
// var name = "QURAT UL AIN"
// var age = "24"
// var qualify = "CERTIFIED MOBILE APP DEVELOPMENT "
// alert(name)
// alert(age)
// alert(qualify)
//Q5
// var a = "pizza";
// var b = '';
// for (var j = 0; j < a.length; j++) {

//     b += a[j];
//     document.write("<br>")
//     document.write(b)
// }
// var a = "pizza";
// var b = '';
// for (var j = a.length; j >= 0; j--) {


//     alert("<br>")
//     alert(a.slice(0, j))
// }
// //Q6
// var email = "ainnkhalid.210@gmail.com"
// email = "my email is" + "" + email
// alert(email)
//Q7
// var book = "A smater way to learn JavaScript"
// book = "i am trying to learn the Book " + "" + book
// alert(book)
//Q8
// document.write("Yah!I can wrtie HTML content through JavaScript")
//     // Q9
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ")


// chapter #03
//Q1
// var age = 15
// alert("i am " + age + " " + "years old")
//Q2
//Q3
// var birthYear = 1996
// Number(birthYear);
// document.write("my bith year is " + " " + birthYear)
// document.write("<br> " + "Data type of my declared variable is number")
//Q4
// var visitorsName = "QURAT UL AIN"
// var product = " T-shirt(s)"
// var quantity = 5;
// document.write(visitorsName + " " + "ordered" + " " + quantity + " " + product + " " + "on XYZ Clothing Store")

//CHAPTER # 04
//Q1
// var a, b, c
//Q2
//LEGAL VARIABLE NAME
// var $a, c, d, e, _f
//     //ILLEGAL VARIABLE NAME
// var na me
// var ? a
// var / a
// var 1 a
// var.a
//Q3

// document.write("<h1>Rules For Naming JS Variable</h1>")
// document.write("Variable names can only contain, number, $ and _ . For example : $my_1stVariable" + "<br>")
// document.write("Variable must begin with a letter, $ or _ .For example : $name, _name or name" + "<br>")
// document.write("Variable names are case sensitive For example : Rose and rose are not same" + "<br>")
// document.write("Variable names should not be JS keyword" + "<br>")

//CAPTER # 05
//Q1
// var a = +prompt("enter first number")
// var b = +prompt("enter first number")
// var c = a + b;
// document.write("Sum of " + a + " " + "and" + " " + b + " " + "is" + " " + c)
//     //Q2
//     //SUBTRACTION
// var a = +prompt("enter first number")
// var b = +prompt("enter first number")
// var c = a - b;
// document.write("Subtraction of " + a + " " + "and" + " " + b + " " + "is" + " " + c)
//     //MULTIPLICATION
// var a = +prompt("enter first number")
// var b = +prompt("enter first number")
// var c = a * b;
// document.write("MultiplicatioN of " + a + " " + "and" + " " + b + " " + "is" + " " + c)
//     //DIVISION
// var a = +prompt("enter first number")
// var b = +prompt("enter first number")
// var c = a / b;
// document.write("division of " + a + " " + "and" + " " + b + " " + "is" + " " + c)
//     //MODULUS
// var a = +prompt("enter first number")
// var b = +prompt("enter first number")
// var c = a % b;
// document.write("Mdulus of " + a + " " + "and" + " " + b + " " + "is" + " " + c)

//Q3
// var x;
// document.write("Value after variable declaration : " + " " + x + "<br>")
// x = 5;
// document.write("Intial Value : " + " " + x + "<br>")
//     ++x;
// document.write("Value after Increment is : " + " " + x + "<br>")
// x = x + 7;
// document.write("Value after Addtion is : " + " " + x + "<br>")
//     --x;
// document.write("Value after Decrement is : " + " " + x + "<br>")
// x = x % 2;
// document.write("The remainder is : " + " " + x + "<br>")
//Q4
// var cost = 600
// cost = cost * 5
// document.write("Total cost to buy 5 tickets to a movie is " + " " + cost + " " + "PKR")
//Q5
// document.write("<h1>Table of 4 </h1>")
// for (var i = 1; i <= 10; i++) {
//     document.write("4" + "x" + i + "=" + 4 * i + "<br>")
// }
//Q6
// var f = +prompt("enter tempertature in fahrenheit")
// var c = +prompt("enter tempertature in Celcius")
// var ce = (f - 32) * 5 / 9
// var fe = (c * 9 / 5) + 32
// document.write(c + "C " + "is " + fe + "C " + "<br>")
// document.write(f + "F" + "is " + ce + "F " + "<br>")
//Q7
// var priceItem1 = +prompt("enter Item1 Price")
// var quantity1 = +prompt("enter Item 1 quantity")
// var priceItem2 = +prompt("enter Item2 Price")
// var quantity2 = +prompt("enter Item 2 quantity")
// var shpping = +prompt("enter shipping charges")
// var tc = (priceItem1 * quantity1) + (priceItem2 * quantity2) + shpping
// document.write("price of item 1 : " + " " + priceItem1 + "<br>")
// document.write("Quantity of item 1 : " + " " + quantity1 + "<br>")
// document.write("price of item 2 : " + " " + priceItem2 + "<br>")
// document.write("Quantity of item 2 : " + " " + quantity2 + "<br>");
// document.write("Shipping Charges : " + " " + shpping + "<br>")
// document.write("Total cost of your order is : " + " " + tc + "<br>")
//Q8
// var totalmarks = +prompt("enter total marks")
// var obtainmarks = +prompt("enter obtained marks")
// var per = (obtainmarks / totalmarks) * 100
// document.write("Total Marks : " + " " + totalmarks + "<br>")
// document.write("Obtained Marks : " + " " + obtainmarks + "<br>")
// document.write("Percentage : " + " " + per + "<br>")
//Q9
// var dollar = 10
// var riyal = 25
// var pkr = (dollar * 104.80) + (riyal * 28)
// document.write("Total Currency in PKR : " + " " + pkr + "<br>")
//Q10
// var a = 5;
// var b = a + 5 * 10 / 2
// document.write("Total is : " + " " + b + "<br>")
//Q11
// var cy = +prompt("enter current year");
// var by = +prompt("enter birth year")
// var age = cy - by;
// document.write("Current Year : " + " " + cy + "<br>")
// document.write("Birth Year : " + " " + by + "<br>")
// document.write("Your Age is : " + " " + age + "<br>")
//Q12
// var radius = +prompt("enter radius")
// var cir = 2 * Math.PI * radius
// var area = Math.PI * radius * radius
// document.write("Radius of a circle : " + " " + radius + "<br>")
// document.write("The circumference is : " + " " + cir + "<br>")
// document.write("Your area is : " + " " + area + "<br>")
//Q13
// var snack = prompt("enter fave snack name")
// var age = +prompt("enter your age")
// var mage = +prompt("enter maximun age")
// var perday = +prompt("how many you eat in a day")
// var c = (mage - age) * perday
// document.write("Favourite Snack : " + " " + snack + "<br>")
// document.write("Current age : " + " " + age + "<br>")
// document.write("Estimated Maximun Age : " + " " + mage + "<br>")
// document.write("Amoutn of snack per day : " + " " + perday + "<br>")
// document.write("Your will need  " + " " + c + " " + snack + " " + "to last you until the ripe old gae of" + " " + mage + "<br>")

//CHAPTER # 06 - 08
//Q1
// var a = 10
// document.write("The value of a is : " + " " + a + "<br>")

// document.write("The value of ++a is : " + " " + ++a + "<br>")
// document.write("Now The value of a is : " + " " + a + "<br>")

// document.write("The value of a++ is : " + " " + a++ + "<br>")
// document.write("Now The value of a is : " + " " + a + "<br>")

// document.write("The value of --a is : " + " " + --a + "<br>")
// document.write("Now The value of a is : " + " " + a + "<br>")
// document.write("The value of a-- is : " + " " + a-- + "<br>")
// document.write("Now The value of a is : " + " " + a + "<br>")
//Q2
// var a = 2
// var b = 1
// document.write("The value of a is : " + " " + a + "<br>")
// document.write("The valueof b is : " + " " + b + "<br>")
// var r = --a - --b + ++b + b--;
// document.write("The result of --a - --b + ++b + b-- is : " + " " + r + "<br>")

//Q3
// var name = prompt("enter your name")
// document.write("Welcome to my page " + " " + name)
//Q4
// var nu = +prompt("enter the table number")
// document.write("<h1>Table </h1>" + "<br>")
// if (nu == "") {
//     for (var i = 1; i <= 10; i++) {
//         document.write("5" + "x" + i + "=" + 5 * i + "<br>")
//     }
// } else {
//     for (var i = 1; i <= 10; i++) {
//         document.write(nu + " " + "x" + i + "=" + nu * i + "<br>")
//     }
// }
//Q6
var s1 = prompt("subject 1 name")
var s2 = prompt("subject 2 name")
var s3 = prompt("subject 3 name")