jQuery(function () {
  const faqButton = $(".forex5__h4");
  function faqExpand() {
    let parent = $(this).parents(".forex5__item");
    $(parent).find(".forex5__p").toggle();
    $(parent).find(".forex5__h4").toggleClass("forex5__h4-up");
  }
  faqButton.on("click", faqExpand);
});
