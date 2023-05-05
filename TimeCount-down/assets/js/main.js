// let date = new Date('2021-03-25');
// date.getFullYear();
// console.log(date);

// Date.now();
let date = new Date();

let [month, day, year] = [

    date.getMonth(),
    date.getDay(),
    date.getFullYear(),

]

// console.log(date);
// console.log(month);
// console.log(day);
// console.log(year);

let [hour, minutes, seconds] = [

    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
]   

// console.log(hour);
// console.log(minutes);
// console.log(seconds);

var countDownDate = new Date("May 04, 2023 00:00:00").getTime();
var x = setInterval(function(){

    var now = new Date().getTime();
    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance > 0){
        clearInterval(x);

        document.getElementById("days").innerHTML = 00;
        document.getElementById("hours").innerHTML = 00;
        document.getElementById("minutes").innerHTML = 00;
        document.getElementById("seconds").innerHTML = 00;

        document.getElementById("card-id").innerHTML = "TIME ELAPSED";
    

    }


    

},1000);