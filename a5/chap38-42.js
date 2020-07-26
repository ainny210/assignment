//Q1
// function power() {
//     var n1 = document.getElementById('n1').value;
//     var n2 = document.getElementById('n2').value;
//     var res = Math.pow(Number(n1), Number(n2))
//     document.getElementById('result').innerHTML = res;
// }
//Q3
// function area() {
//     var n1 = document.getElementById('n1').value;
//     var n2 = document.getElementById('n2').value;
//     var n3 = document.getElementById('n3').value;
//     var s = (Number(n1) + Number(n2) + Number(n3)) / 2
//     areacalc(s, n1, n2, n3)
// }
//Q4

// function areacalc(s, n1, n2, n3) {
//     var a = s * ((s - Number(n1)) * (s - Number(n2)) * (s - Number(n3)));
//     console.log(a)
//     document.getElementById('result').innerHTML = a;
// }
// function mainfnc() {
//     var n1 = document.getElementById('n1').value;
//     var n2 = document.getElementById('n2').value;
//     var n3 = document.getElementById('n3').value;
//     avgfnc(n1, n2, n3);
//     perfnc(n1, n2, n3)
// }

// function avgfnc(n1, n2, n3) {
//     var a = (Number(n1) + Number(n2) + Number(n3)) / 3
//     document.getElementById('av').innerHTML = a;

// }

// function perfnc(n1, n2, n3) {
//     var p = ((Number(n1) + Number(n2) + Number(n3)) / 300) * 100;
//     document.getElementById('pe').innerHTML = p;
// }
//Q5
// function indexoffunc() {
//     var n1 = document.getElementById('n1').value;
//     var n2 = document.getElementById('n2').value;
//     var c = n1.split('')
//     for (var i = 0; i < n1.length; i++) {
//         if (c[i] == n2) {
//             var res = i;

//         }
//     }
//     console.log(res)
//     document.getElementById('result').innerHTML = res;
// }
//Q6
// function rv() {
//     var n1 = document.getElementById('n1').value;

//     var c = n1.toLowerCase();
//     var d = n1.split('')
//     var b = n1.length
//     if (b > 25) {
//         alert("sentence should not more than 25 characters long. ")
//     } else {
//         for (var i = 0; i < n1.length; i++) {
//             if (d[i] == 'a' || d[i] == 'e' || d[i] == 'i' || d[i] == 'o' || d[i] == 'u') {
//                 d.splice(d[i], 1)
//             }
//             console.log(d[i])
//         }
//         var x = d[i]
//         document.getElementById('result').innerHTML = x
//     }
// }s