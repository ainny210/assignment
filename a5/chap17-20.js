//CHAPTER # 17-20
//Q1
// var a =[[],[]];
//Q2
// var a = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 4; j++) {
//         document.write(a[i][j] + " ");
//     }
//     document.write("<br>")
// }

//Q3
// var a = 1;
// for (var i = 0; i < 10; i++) {
//     document.write(a++ + "<br>")
// }
//Q4
//var a = +prompt("enter number");
// var l = +prompt("enter length")
// for (var i = 1; i <= l; i++) {
//     document.write(a + "x" + i + "=" + a * i + "<br>")
// }

//Q5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>")
// }
//Q6
// document.write("<h1>COUNTING :</h1>" + "<br>")
// for (var i = 1; i <= 15; i++) {

//     document.write(i + ",")
// }
// var revcount = 10;
// document.write("<h1>REVERSE COUNTING :</h1>" + "<br>")
// for (var j = revcount; j > 0; j--) {

//     document.write(revcount-- + ",")
// }
// document.write("<h1>EVEN</h1>" + "<br>")
// for (var k = 1; k <= 20; k++) {
//     if (k % 2 == 0)
//         document.write(k + ",");
// }
// document.write("<h1>ODD</h1>" + "<br>")
// for (var k = 1; k <= 20; k++) {
//     if ((k - 1) % 2 == 0)
//         document.write(k + ",");
// }
// document.write("<h1>SERIES</h1>" + "<br>")
// for (var k = 1; k <= 20; k++) {
//     if (k % 2 == 0)
//         document.write(k + "k" + ",");
// }
//Q7
// var pro = prompt("Welcome to ABC Bakery.what do want to order?")
// pro = pro.toLowerCase()
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// for (var i = 0; i <= a.length; i++) {
//     if (pro == a[i]) {
//         c = a.indexOf(pro)
//         alert(pro + " " + "is availabe at index" + " " + c + " " + "in our balery");
//         break;
//     } else {

//         alert("we are sorry" + " " + pro + " " + "is not available in our bakery");
//     }
// }

//Q8
// var a = [24, 53, 78, 91, 12]
// var largest = 0;
// for (i = 1; i <= a.length; i++) {
//     if (a[i] > largest) {
//         var largest = a[i];
//     }
// }
// document.write("largest number in an array is : " + largest);
//Q9
// var a = [24, 53, 78, 91, 12]
// var largest = a[0];
// for (i = 1; i <= a.length; i++) {
//     if (a[i] < largest) {
//         var largest = a[i];
//     }
// }
// document.write("smallest number in an array is : " + largest);
//Q10


// for (var i = 1; i <= 20; i++) {
//     c = 5 * i
//     document.write(c + ",")
// }