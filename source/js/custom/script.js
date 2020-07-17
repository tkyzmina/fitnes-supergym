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
      centerMode: false,
      draggable: true,
      swipe: true,
      waitForAnimate: false,
      variableWidth: false,
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
  // // imask
  /* eslint-disable */

  var element = document.getElementById('tel');
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(element, maskOptions);

  /* eslint-enable */
  // imask end


  var coaches = document.querySelectorAll('.coaches__item');
  var review = document.querySelectorAll('.review__item');
  var tabsBtnList = document.querySelectorAll('.tickets__button');
  var allCardsList = document.querySelectorAll('.tickets__item');

  coaches.forEach(function (item) {
    item.classList.remove('no-js');
  });
  review.forEach(function (elem) {
    elem.classList.remove('no-js');
  });

  allCardsList.forEach(function (el) {
    el.classList.remove('tickets__item--show');
    el.classList.remove('tickets__item--hide');
  });


  tabsBtnList.forEach(function (button) {
    button.addEventListener('click', function () {
      var ticketsBtnActive = document.querySelector('.tickets__button--active');
      ticketsBtnActive.classList.remove('tickets__button--active');
      button.classList.add('tickets__button--active');

      var dataTab = button.getAttribute('data-tab');
      var tabsList = document.querySelectorAll('.tickets__tab');

      for (var i = 0; i < tabsList.length; i++) {
        // eslint-disable-next-line
        if (dataTab == i) {
          tabsList[i].classList.add('tickets__tab--show');
          tabsList[i].classList.remove('tickets__tab--hide');
        } else {
          tabsList[i].classList.remove('tickets__tab--show');
          tabsList[i].classList.add('tickets__tab--hide');
        }
      }
    });
  });

  var anchor = document.querySelector('a[href^="#tickets"]');
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    var block = anchor.getAttribute('href');
    document.querySelector('' + block).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

})();
