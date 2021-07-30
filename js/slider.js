$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots:true,
        arrows:false,
        Infinity:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:10000,
        responsive: [
            {
                breakpoint:1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
})