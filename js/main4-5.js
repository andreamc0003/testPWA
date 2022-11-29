jQuery(function ($) {
  // slide 4
  jQuery(function () {
    $(".main4__list").slick({
      infinite: true,
      slidesToShow: 3,
      swipeToSlide: true,
      slidesToScroll: 1,
      centerMode: true,
      initialSlide: 1,
      centerPadding: "0px",
      touchThreshold: 15,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      dots: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    const faqButton = $(".acc4__h4");
    function faqExpand() {
      let parent = $(this).parents(".acc4__item");
      $(parent).find(".acc4__p").toggle();
      $(parent).find(".acc4__h4").toggleClass("acc4__h4-up");
    }
    faqButton.on("click", faqExpand);
  });

  // slide 5
  let isMain5SLickInit = false;
  function main5Slick() {
    if (window.innerWidth < 900) {
      if (isMain5SLickInit) {
        return;
      } else {
        $(".main5__list").slick({
          infinite: true,
          slidesToShow: 1,
          variableWidth: true,
          swipeToSlide: true,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          touchThreshold: 15,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
          dots: false,
        });
        isMain5SLickInit = true;
      }
    } else {
      if (isMain5SLickInit) {
        $(".main5__list").slick("unslick");
        isMain5SLickInit = false;
      } else {
        return;
      }
    }
  }
  $(window).on("load", main5Slick);
  $(window).on("resize", main5Slick);
});
