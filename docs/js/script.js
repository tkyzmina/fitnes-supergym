$(document).ready(function () {
  $('.review__wrapper').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFosus: true,
    pauseOnHover: true,
    draggable: true,
    swipe: true,
    waitForAnimate: false,
    variableWidth: true,
  });
});
