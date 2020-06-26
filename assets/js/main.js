(function ($) {
    "use strict";

    
     // Navbar Sticky
    
     $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });

    //Smoth Scroll
    $(function () {
        $('.nav-link, .smoth-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });

    /* MAIN HERO AREA*/

    // $('.hero-area-slids').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     nav: false,
    //     doots: false,
    //     autoplay: true,
    //     animateOut: 'fadeOutRight',
    //     animateIn: 'fadeIn'

    // });
    //Wow Animation
    new WOW().init();

    /*TYPED JS*/
    var element = $('.typed');

    $(function () {
        element.typed({
            strings: ["UI/ UX Developer.", "Web Developer."],
            typeSpeed: 100,
            loop: true,
            autoplay: true,
        });
    });

    /*PORTFOLIO SECTION*/

    lightbox.option({
        'imageFadeDuration': 800,
        'resizeDuration': 500,
        'wrapAround': true
    });

    $('.portfolio-area').mixItUp();


    /*::::::::::::::::::::::::::::::::::::
       Testimonial Section
    ::::::::::::::::::::::::::::::::::::*/

    // $('.testimonials').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     autoplay: true,
    //     nav: true,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     dots: false
    // });


    /* CONTACT ME  */
    var form = $('#contact-form');

    var formMessages = $('.form-message');
    $(form).submit(function (e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);

                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });
    
    /* PRELOADER */
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });

}(jQuery));
