//CHAPTER 31-34
//Q1
//current date time
// var cudate = new Date();
// document.write(cudate)
//Q2
// var cudate = new Date();
// var dlong = cudate.toLocaleString('default', { month: 'long' })
// var eshort = cudate.toLocaleString('default', { month: 'long' })
// document.write("Current month in long "+" "+ dlong)
// document.write("Current month in short "+" "+ eshort)

//Q3
// var d = new Date();
// var w = [];
// w[0] = 'sunday';
// w[1] = 'monday';
// w[2] = 'tuesday';
// w[3] = 'wednesday';
// w[4] = 'thursday';
// w[5] = 'friday';
// w[6] = 'saturday';
// var da = w[d.getDay()];
// var s = da.slice(0, 3);
// document.write("Today is "+" "+ s);
//Q4
// var d = new Date();
// var da = d.getDay();
// if (da == 0 || da == 6) {
//     document.write("Its fun day")
// } else {
//     document.write("its weekday")
// }
//Q5
// var d = new Date();
// var da = d.getDate();
// if (da < 16) {
//     document.write("First fifteen days of the month")
// } else {
//     document.write("Last days of the month")
// }
//Q6
//Q7
// var d = new Date();
// var da = d.getTime();
// document.write(da)
//Q8
//Q9
//Q10
//Q11
//Q12
//Q13
// var a = +prompt("enter your age")
// var d = new Date();
// var da = d.getFullYear();
// var b = da - a
// document.write("your age is " + " " + a + "<br>")
// document.write("your birthyear is " + " " + b)

//Q14
var name = 'ABC CUSTOMER'
name = name.bold()
var d = new Date();
var m = d.toLocaleString('default', { month: 'long' })
m = m.bold()
var u = 410;

var cu = 16;

var lp = 350
var amount = u * cu;
var grossamount = amount + lp;
document.write("<h2>K-Electric Bill</h2>")
document.write("Customer Name : " + " " + name + "<br>")
document.write("Month : " + " " + m + "<br>")
document.write("Number of units :  " + " " + u + "<br>")
document.write("Charges per unit " + " " + cu + "<br>")
document.write("<br><br>")
document.write(" Net Amount Payable (within Due Date) : " + " " + amount + "<br>")
document.write("Late Payment Surcharge : " + " " + lp + "<br>")
document.write("Gross Amount Payable (after Due Date) : " + " " + grossamount + "<br>")