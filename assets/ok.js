// Particle js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 76,
            "density": {
                "enable": true,
                "value_area": 1736.124811591
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


// Typed
var typedit = new Typed('#typedit', {
    strings: ['Front-End Developer', 'UI/UX Devloper', 'Graphic Designer'],
    typeSpeed: 40,
    backSpeed: 20,
    cursorChar: '_',
    fadeOut: true,
    loop: true
});

// progress bar hover
$(function () {
    $('.timeline-panel2').mouseenter(function () {
        $('.bg').css('background-color', '#f9004d');
    }).mouseleave(function () {
        $('.bg').css('background-color', '#222529');
    });
    $('.timeline-panel1').mouseenter(function () {
        $('.bg1').css('background-color', '#f9004d');
    }).mouseleave(function () {
        $('.bg1').css('background-color', '#222529');
    });
});

// back to top button
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});


// Add Menu Active Class when scrolling to div
$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('section').each(function (i) {
            // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).position().top <= windscroll - 0) {
                $('nav li.active').removeClass('active');
                $('nav li').eq(i).addClass('active');
            }
        });

    } else {

        $('nav li.active').removeClass('active');
        $('nav li:first').addClass('active');
    }

}).scroll();


$("#222013016806038").on("load", function () {
    let head = $("#222013016806038").contents().find("head");
    let css = '<style>.branding21.formFooter, .thankyou-footer-wrapper{display: none;} .supernova{background-color: transparent;}</style>';
    $(head).append(css);
});

// mobile nav button

$('.moble-section').hide();

$('.pop').click(function () {
    $('.moble-section').fadeIn(500);
});

$('.close').click(function () {
    $('.moble-section').fadeOut(500);
});

$('.nav-item').click(function () {
    $('.moble-section').fadeOut();
});
