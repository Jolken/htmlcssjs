var curSlide = 0;
var slider;
window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    slider = document.querySelectorAll('.slide');
    slider[0].classList.remove('hidden');
    
    setInterval( function () {
        changeSlide(slider, 1);
    }, 8000);
};


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


function loginPrompt(type, defaul) {
    return prompt(type, defaul);
}

function changeSlide(obj, val) { //-1 prev, 1 next
    obj[curSlide].classList.add('hidden');
    curSlide += val;
    if (curSlide > obj.length - 1) {
        curSlide = 0;
    }
    if (curSlide < 0) {
        curSlide = obj.length - 1;
    }
    obj[curSlide].classList.remove('hidden');
}

function loginClick() {
    var userData = {
        'username': loginPrompt('Username', 'admin'),
        'password': loginPrompt('Password', 'admin')
    };
}

