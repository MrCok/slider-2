var slides = document.querySelectorAll('.slide');
// var dots = document.getElementsByClassName("slider-dots_item");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

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

pauseButton.onclick = function() {
    if (playing) {
  	    pauseSlideShow();
    } else {
  	    playSlideShow();
	  }
};

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

var controls = document.querySelectorAll('.controls');

for (var i = 0; i < controls.length; i++){
    controls[i].style.display = 'inline-block';
}
s1.onclick = function() {
    goToSlide (i = 0);
    pauseSlideShow();
    // var dots = document.getElementsByClassName("indicator");
    // dots[i = 0].classList.add("actives");
    // var dot = document.getElementById("s1");
    // dot.style.backgroundColor = "#ccc";
};
s2.onclick = function() {
    goToSlide (i = 1);
    pauseSlideShow();
};
s3.onclick = function() {
    goToSlide (i = 2);
    pauseSlideShow();
};
s4.onclick = function() {
    goToSlide (i = 3);
    pauseSlideShow();
};
s5.onclick = function() {
    goToSlide (i = 4);
    pauseSlideShow();
};

// for (let i = 0; i < slides.Length; i++) {
//     indicators[i].onclick = clickIndicatorBtn;
// }

// function clickIndicatorBtn() {
//     pauseSlideShow();
//     goToSlide(currentSlide);
//     // goToSlide(+this.getAttribute (qualifiedName: "data-slide-to"));
//     // goToSlide(+target.getAttribute("data-slide-to"));
// };