import '../scss/app.scss';

/* Your JS Code goes here */

/* Demo JS */
import './demo.js';


import $ from "jquery";

import 'slick-carousel';

// alert('labas');


$(document).ready(function() {
  $('.autoplay').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


