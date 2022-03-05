// counting

jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

// slider

$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
});
