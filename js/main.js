var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

var indicatorsContainer = document.querySelector('.indicators');
var indicators = document.querySelectorAll('.indicator');

var playing = true;
var pauseButton = document.querySelector('#pause');

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    indicators[currentSlide].className = 'indicator';
    currentSlide = (n+slides.length) % slides.length;
    slides[currentSlide].className = 'slide active';
    indicators[currentSlide].className = 'indicator actives';

}

function pauseSlideShow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideShow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}
//Переключение Пауза=Воспр, по клику
// pauseButton.onclick = function() {
//     if (playing) {
//   	    pauseSlideShow();
//     } else {
//   	    playSlideShow();
// 	  }
// };
function pausePlay() {
    if (playing) pauseSlideShow();
    else playSlideShow();
}

pauseButton.addEventListener("click", pausePlay);


var next = document.querySelector('#next');
var previous = document.querySelector('#previous');

next.onclick = function() {
    pauseSlideShow();
    nextSlide();
};

previous.onclick = function() {
    pauseSlideShow();
    previousSlide();
};

// var controls = document.querySelectorAll('.controls');

// for (var i = 0; i < controls.length; i++){
//     controls[i].style.display = 'inline-block';
// }
dots1.onclick = function() {
    goToSlide (i = 0);
    pauseSlideShow();


    // !!!!!!!!!!!!!!!!!!! КОММЕНТА ДЛЯ ТЕСТА !!!!!!!!!!!!!!!
    ////var dots = document.getElementsByClassName("indicator");
    // dots[i = 0].classList.add("actives");
    // var dot = document.getElementById("s1");
    // dot.style.backgroundColor = "#ccc";
};
dots2.onclick = function() {
    goToSlide (i = 1);
    pauseSlideShow();
};
dots3.onclick = function() {
    goToSlide (i = 2);
    pauseSlideShow();
};
dots4.onclick = function() {
    goToSlide (i = 3);
    pauseSlideShow();
};
dots5.onclick = function() {
    goToSlide (i = 4);
    pauseSlideShow();
};

//с клавы
let clickPause = () => playing ? pauseSlideShow() : playSlideShow(); // для срабатывания паузы с клавиатуры

let pressKey = (e) => {
    console.log(e.key);
    if(e.key === "ArrowLeft") {
        previousSlide();
    }
    if(e.key === "ArrowRight") {
        nextSlide();
    }
    if(e.key === "Enter") {
        clickPause();
    } 
    // if(e.key === "ArrowDown") {
    //     playSlideShow();
    // } 
}; 

addEventListener("keydown", pressKey);
// finish с клавы

//swipe
let carousel = document.querySelector(".slides");
let swipeStart = (e) => {
    swipeStartX = e.changedTouches[0].pageX;
};

let swipeEnd = (e) => {
    swipeEndX = e.changedTouches[0].pageX;
    swipeStartX - swipeEndX > 100 && previousSlide();
    swipeStartX - swipeEndX < -100 && nextSlide();
};

carousel.addEventListener("touchstart", swipeStart);
carousel.addEventListener("touchend", swipeEnd);
//finish swipe
