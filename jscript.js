/**
 * Created by android on 15-03-2017.
 */
$(document).ready(function(){

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 412) {
            $('#nav_bar').addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 413) {
            $('#nav_bar').removeClass('navbar-fixed-top');
        }
    });



    $('.crsl').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 280) {
            $('#nav_bar').addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 281) {
            $('#nav_bar').removeClass('navbar-fixed-top');
        }
    });

});