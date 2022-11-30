jQuery(function ($) {
  const thankInput = $(".thank1__email");
  const thankError = $(".thank1__form-error");
  const thankButton = $(".thank1__btn");
  function validateThank() {
    if ($(thankInput).val().length == 0) {
      $(thankError).removeClass("display-none");
      $(thankButton).addClass("nopointer");
    } else {
      $(thankError).addClass("display-none");
      $(thankButton).removeClass("nopointer");
    }
  }
  // validate email on keyup
  $(thankInput).on("keyup", validateThank);

  // validate email on focus
  $(thankInput).on("focus", validateThank);
});
