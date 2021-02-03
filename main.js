'use strict';

/* global $ */

$(function() {
  $('.slider').slick({
      autoplay: true,
      autoplayspeed: 5000,
      // dots: true,
      arrows: true,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      pauseOnHover: false,
      // dotsClass: 'slide-dots',
  });
  
  
});