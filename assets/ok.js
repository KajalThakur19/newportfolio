
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
