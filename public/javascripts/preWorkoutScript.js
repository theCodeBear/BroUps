// script for the preworkout.ejs view
$(function() {

  $("#start").on("click", function() {
    location.href = "workout";
  });

  $("#change").on("click", function() {
    $("input").prop("disabled", false);
  });

});
