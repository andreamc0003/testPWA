jQuery(function () {
  const faqButton = $(".faq1__h3");
  function faqExpand() {
    let parent = $(this).parents(".faq1__item");
    $(parent).find(".faq1__p").toggleClass("display-none");
    $(parent).find(".faq1__h3").toggleClass("faq1__h3-up");
  }
  faqButton.on("click", faqExpand);
});
