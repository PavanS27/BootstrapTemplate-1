$(
  window.scroll(function() {
    if ($(this).scrollTop() > 1) {
      $(".navbar").addClass("shrink");
    } else {
      $(".navbar").removeClass("shrink");
    }
  })
);
