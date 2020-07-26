//CHAPTER 14-16
//Q1
//Declare an empty array using JS literal notation to store student names in future.
// var arrayA = []
// var arrayB = new Array()
//     //Q2
//     //  Declare an empty array using JS object notation to store student names in future.
// var objectA = {}
// var objectB = new Object()
//     //Q3
//     //String Array 
// var arrayA = ['pizza', 'pasta', 'burger']
//     //q4
// var arrayA = [12, 13, 4, 5, 6]
//     //q5
// var arrayB = new Array(true, false)
//     //q6
// var arrayA = [12, 'pizza', 4, 5, 'burger', 'pasta']
//q7
// var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
// document.write("<h1>QUALIFICATION</h1>" + "<br>")
// for (var i = 0; i <= qualification.length; i++) {
//     document.write(qualification[i] + "<br>")
// }
//Q8
// var n = ['michel', 'tony', 'john']
// var s = [320, 230, 480]
// for (var i = 0; i < n.length; i++) {
//     document.write("Score of  " + " " + n[i] + " : " + s[i] + " " + "Percentage : " + " " + (s[i] / 500) * 100 + "%" + "<br>")
// }
//Q9
//Q10
// var s = [320, 230, 480, 120]
// s = s.sort()
// alert(s)
//Q11
// var city = ['karchi', 'lahore', 'islamabad', 'pishawar', 'quetta', 'muree']
// var selectedcity = city.slice(2, 4)
// document.write("<h3>Cities list</h3>" + " " + city + "<br> ")
// document.write("<h3>Selected cities list</h3>" + " " + selectedcity)
//     //Q12
// var a = ['This', 'is', 'my', 'cat']
// var c = a.join(' ');
// document.write("<h3>Array : </h3>" + " " + a)
// document.write("<h3>String : </h3>" + " " + c)
//Q13 //FIFO
// var a = []
// var l = +prompt("enter no of devices you wanna enter")
// for (var i = 0; i < l; i++) {
//     a[i] = prompt("enter devices")
//     document.write("<h3>OUT</h3>")
//     document.write(a[i] + "<br>")
// }
//Q14//LIFO
// var a = []
// var l = +prompt("enter no of devices you wanna enter")
// for (var i = 0; i < l; i++) {
//     a[i] = prompt("enter devices")
// }

// for (var j = l - 1; j >= 0; j--) {
//     document.write("<h3>OUT</h3>")
//     document.write(a[j] + "<br>")
//     console.log(a[j])
// }
//Q15