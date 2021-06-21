$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        /* adaptiveHeight: true,*/
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
            },
            {
               breakpoint: 320,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 dots: true,
                 arrows: false
                }
              }
          ]
      });
  });

