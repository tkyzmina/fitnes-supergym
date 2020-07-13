'use strict';
(function () {
  // eslint-disable-next-line
  $(document).ready(function () {
    // eslint-disable-next-line
    $('.review__wrapper').slick({
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease',
      autoplay: false,
      autoplaySpeed: 3500,
      pauseOnFosus: true,
      pauseOnHover: true,
      draggable: true,
      swipe: true,
      waitForAnimate: false,
      variableWidth: true,
    });
    // eslint-disable-next-line
    $('.coaches__list').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 500,
      easing: 'ease',
      autoplay: false,
      autoplaySpeed: 3500,
      pauseOnFosus: true,
      pauseOnHover: true,
      draggable: true,
      swipe: true,
      waitForAnimate: false,
      variableWidth: true,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    });
  });


  var coaches = document.querySelectorAll('.coaches__item');
  var review = document.querySelectorAll('.review__item');
  var ticketsBtnList = document.querySelectorAll('.tickets__button');
  var allCardsList = document.querySelectorAll('.tickets__item');
  var oneMontList = document.querySelectorAll('.tickets__item--one');

  coaches.forEach(function (element) {
    element.classList.remove('no-js');
  });
  review.forEach(function (element) {
    element.classList.remove('no-js');
  });

  oneMontList.forEach(function (element) {
    element.classList.remove('tickets__item--hide');
    element.classList.add('tickets__item--show');
  });

  var hideTickets = function () {
    for (var i = 0, len = allCardsList.length; i < len; i++) {
      allCardsList[i].classList.remove('tickets__item--show');
      allCardsList[i].classList.add('tickets__item--hide');
    }
  };

  ticketsBtnList.forEach(function (element) {
    element.addEventListener('click', function () {
      var ticketsBtnActive = document.querySelector('.tickets__button--active');
      var sixMontList = document.querySelectorAll('.tickets__item--six');
      var yearList = document.querySelectorAll('.tickets__item--year');

      ticketsBtnActive.classList.remove('tickets__button--active');
      element.classList.add('tickets__button--active');

      hideTickets();

      if (element.id === 'one-month') {
        oneMontList.forEach(function (elem) {
          elem.classList.remove('tickets__item--hide');
          elem.classList.add('tickets__item--show');
        });
      }

      if (element.id === 'six-month') {
        sixMontList.forEach(function (el) {
          el.classList.remove('tickets__item--hide');
          el.classList.add('tickets__item--show');
        });
      }

      if (element.id === 'year') {
        yearList.forEach(function (e) {
          e.classList.remove('tickets__item--hide');
          e.classList.add('tickets__item--show');
        });
      }
    });
  });

})();
