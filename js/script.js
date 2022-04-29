//current page indicator
const currentLocation = location.href;
const navItems = document.querySelectorAll('a');
const navLength = navItems.length;

for (let i = 0; i < navLength; i++) {
    if(navItems[i].href === currentLocation) {
        navItems[i].classList.add('active');
    }
};
//current page indicator ends here

//navbar toggle effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});
//navbar toggle effect ends here

//hamburger menu 
var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav-items");
hamburger.addEventListener("click", function toggleMenu() {
    nav.classList.toggle("is-active");
  hamburger.classList.toggle("is-active");
});
//hamburger menu ends here

//slider
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

function nextSlide() {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', () => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', () => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
//slider ends here

//lightslider
$(document).ready(function() {
    $('#responsive').lightSlider({
        item:4,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:1400,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:1250,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:1120,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:770,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:1,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
});
//lightslider ends here

// number counter animation
const counters = document.querySelectorAll('.counter');
const speed = 400;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    }
    updateCount();
});
//number counter animation ends here

//testimonial slider
$(document).ready(function() {
    var autoplaySlider = $('#autoplay').lightSlider({
        auto:true,
        speed:1100,
        loop:true,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        }
    });
});
//testimonial slider ends here