var min = 0;
var sec = 0;
var milisec = 0;
var hour = 0;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var miliseconds = document.getElementById("miliseconds");
var hours = document.getElementById("hours")
var interval;

function timer() {
    milisec++
    miliseconds.innerHTML = milisec;
    if (milisec >= 60) {
        sec++;
        seconds.innerHTML = sec;
        milisec = 0;
    } else if (sec >= 60) {
        min++;
        minutes.innerHTML = min;
        sec = 0;

    } else if (min >= 60) {
        hour++;
        hours.innerHTML = hour;
        min = 0;
    } else if (hour == 24) {
        reset();
    }
}



function start() {
    myVar = setInterval(function() { timer() }, 10);
    timer()
}


function pause() {

    clearInterval(myVar)

}

function reset() {
    myVar = setInterval(function() { timer() }, 10);
    min = 0;
    sec = 0;
    milisec = 0;
    hour = 0;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    miliseconds.innerHTML = milisec;
    hours.innerHTML = hour;
    clearInterval(myVar)

}