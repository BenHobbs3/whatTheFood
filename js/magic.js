$(function () {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class = "prev_arrow"> <img src = "../images/arrowLeft.png"/></span>',
        nextArrow: '<span class = "next_arrow"> <img src="../images/arrowRight.png"/></span>',
      });
});

