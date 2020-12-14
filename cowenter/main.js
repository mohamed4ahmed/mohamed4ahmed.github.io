var daysEl =document.getElementById("days");
var hoursEl =document.getElementById("hours");
var minsEl =document.getElementById("minutes");
var secondsEl =document.getElementById("seconds");

var newYears = new Date("2020 12 28");

function countdown() {

    var currentDate = new Date ();
  //  var  newYearDate = (newYears);
    

    var  totalSeconds = Math.floor( (newYears - currentDate)/1000 );
    var  seconds = Math.floor(totalSeconds)%60;
    var  mins   =  Math.floor( totalSeconds/60 ) %60;
    var  hours   =  Math.floor( totalSeconds/ 60/60 )%24;
    var  days   = Math.floor( totalSeconds/60/60/24 );

    daysEl.innerHTML= days;
    hoursEl.innerHTML= hours;
    minsEl.innerHTML= mins;
    secondsEl.innerHTML= seconds;
}
// initial call
countdown();

setInterval(countdown);