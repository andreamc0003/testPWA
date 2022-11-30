jQuery(function () {
  let pricing1Init = false;
  function pricing1Slide() {
    if ($(window).innerWidth() < 720) {
      if (!pricing1Init) {
        $(".pricing1__list").slick({
          infinite: true,
          slidesToShow: 1,
          swipeToSlide: true,
          initialSlide: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
          dots: false,
        });
        pricing1Init = true;
      }
    } else {
      if (pricing1Init) {
        $(".pricing1__list").slick("unslick");
        pricing1Init = false;
      }
    }
  }
  $(window).on("load", pricing1Slide);
  $(window).on("resize", pricing1Slide);
});
