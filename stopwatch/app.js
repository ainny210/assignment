var min = 0;
var sec = 0;
var milisec = 0;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var miliseconds = document.getElementById("miliseconds");
var interval;

function timer() {
    milisec++
    miliseconds.innerHTML = milisec;
    if (milisec >= 100) {
        sec++;
        seconds.innerHTML = sec;
        milisec = 0;
    } else if (sec >= 10) {
        min++;
        minutes.innerHTML = min;
        sec = 0;
    }
}



function start() {
    myVar = setInterval(function() { timer() }, 1000);
    timer()
}


function pause() {

    clearInterval(myVar)

}

function reset() {
    myVar = setInterval(function() { timer() }, 1000);
    min = 0;
    sec = 0;
    milisec = 0;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    miliseconds.innerHTML = milisec;
    clearInterval(myVar)

}