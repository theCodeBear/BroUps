$(function() {
  Parse.initialize("O3sPTbDHqRJXXW67UEHwZzOVih4FYKT5yqnng5CS", "gLsoZuPGEIHXxRFsW6n5fISA1c1yD7EsjW6ewgup");

  // Simple syntax to create a new subclass of Parse.Object.
  var DB = Parse.Object.extend("Users_and_Exercises");
  // Create a new instance of that class.
  var db = new DB();
  // check is user has any exercises listed, if so, enable start workout button.




  $("#add").on("click", function(d) {
    $(this).prop("disabled", true);
    toggleButtons(this, "#edit");
    $("#table").toggle('hide');
    $("form").toggle('show');
  });

  $("#edit").on("click", function() {
    $(this).prop("disabled", true);
    toggleButtons(this, "#add");
    $("#table").toggle('show');
    $("form").toggle('hide');
  });


  function toggleButtons(thisButt, otherButt) {
    $(thisButt).toggleClass("down");
    $(otherButt).toggleClass("down");
    $(otherButt).prop("disabled", false);
  }





});