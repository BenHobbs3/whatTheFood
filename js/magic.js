$(function () {
    $('.slider').slick({
        // centerMode: true,
        // centerPadding: '60px',
        // infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,

        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ],
        prevArrow: '<span class = "prev_arrow"> <img src = "../images/arrowLeft.png"/></span>',
        nextArrow: '<span class = "next_arrow"> <img src="../images/arrowRight.png"/></span>',
      });
});


