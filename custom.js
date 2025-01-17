$(document).ready(function() {
    const headHeight = $('#section-header').height();
    const root = document.documentElement;
    const head_height = headHeight + 20;
    setCSSVariable('--header-height', `-${head_height}px`);
    function setCSSVariable(variable, value) {
        root.style.setProperty(variable, value);
    }
    console.log(headHeight)
});


window.onscroll = function() {
    // Get the scroll height
    // var scrollHeight = document.documentElement.scrollHeight;
    // Get the current scroll position
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // Get the client height (viewport height)
    // var clientHeight = document.documentElement.clientHeight;

    if (scrollTop > 65) {
        document.querySelector("#section-header").classList.add("scrolled")
    } else {
        document.querySelector("#section-header").classList.remove("scrolled")
    }
};

var $root = $('html, body');
$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });

    return false;
});

$(document).ready(function() {
    $('.prog_slider').slick({
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                adaptiveHeight: true
              }
            }
        ]
    });

    $('.grid-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true,
        speed: 300,
        adaptiveHeight: true,
        arrows: true,
        dots: false,
        responsive: [
           {
              breakpoint: 1140,
              settings: "unslick"
           }
        ]
     });
});