jQuery(document).ready(function ($) {
  $(".main1__slider").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 3,
    arrows: false,
    buttons: false,
  });
});
