(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.nav-bar').addClass('shadow-sm').css('background-color', 'white');
        } else {
            $('.nav-bar').removeClass('shadow-sm').css('background-color', 'transparent');
        }
    });
    

    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-down"></i>'
        ],
    });


    // attractions carousel
    $(".attractions-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            },
            1400:{
                items:4
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);
document.getElementById('start-button').addEventListener('click', function() {
    const teamIcons = document.querySelector('.team-icon');
    teamIcons.classList.toggle('show');
    
    // Añadir animación al botón
    this.classList.toggle('animate');
});

// Añadir animación CSS cuando se hace clic en el botón
document.querySelector('#start-button').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#007bff';
    this.querySelector('i').style.color = '#fff';
});

document.querySelector('#start-button').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#0056b3';
    this.querySelector('i').style.color = '#fff';
});

  


    // ANIMACION DE LOS PILARES// Selecciona todos los contenedores con la clase 'hover-effect'

    // Selecciona todos los contenedores con la clase 'hover-effect'
    document.addEventListener('DOMContentLoaded', () => {
        const hoverEffect = document.querySelector('.hover-effect');
    
        hoverEffect.addEventListener('mouseenter', () => {
            hoverEffect.classList.add('active');
        });
    
        hoverEffect.addEventListener('mouseleave', () => {
            hoverEffect.classList.remove('active');
        });
    });
    


// animacionnde letras 

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector('.animate-title');
    const text = title.textContent;
    title.textContent = '';

    // Crear un span para cada letra
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.classList.add('letter');
        span.style.animationDelay = `${i * 0.1}s`; // Retraso para cada letra
        title.appendChild(span);
    }
});




