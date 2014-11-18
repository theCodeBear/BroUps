$(function() {
  
  $("#signup").on("click", function(d) {
    $(this).prop("disabled", true);
    toggleButtons(this, "#login");
    $("form[name=login]").toggle('hide');
    $("form[name=signup]").toggle('show');
  });

  $("#login").on("click", function() {
    console.log("login");
    $(this).prop("disabled", true);
    toggleButtons(this, "#signup");
    $("form[name=login]").toggle('show');
    $("form[name=signup]").toggle('hide');
  });


  function toggleButtons(thisButt, otherButt) {
    $(thisButt).toggleClass("down");
    $(otherButt).toggleClass("down");
    $(otherButt).prop("disabled", false);
  }



  // // handle signup button, put stuff in database
  // $("#signupButt").on("click", function() {
  //   console.log()
  // });


  $("form[name=signup]").submit(function(e) {
    // e.preventDefault(); // Prevents the page from refreshing
    // location.href="menu"; // go to menu page
    var $this = $(this); // `this` refers to the current form element
    $.post(
        $this.attr("action"), // Gets the URL to send the post to
        $this.serialize(), // Serializes form data in standard format
        function(data) { /** code to handle response **/ },
        "json" // The format the response should be in
    );
  });

});