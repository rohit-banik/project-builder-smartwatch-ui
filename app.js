var topTime = document.getElementById('topTime');
var mainTime = document.getElementById('mainTime');
var dayDisplay = document.getElementById('day');

var time = setInterval(function(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var time = new Date();
    var day = time.getDay();
    var hour = String(time.getHours()).padStart(2, '0');
    var min = String(time.getMinutes()).padStart(2, '0');
    var sec = String(time.getSeconds()).padStart(2, '0');
    
    topTime.innerHTML = hour + " : " + min + " : " + sec; 
    mainTime.innerHTML = hour + ":" + min; 
    dayDisplay.innerHTML = days[day];
}, 1000);