$(function() {
  
// also need to add the functionality of adding this set of the workout to the local workout memory (at the end of the workout it will be stored on the database)

// BUTTON HANDLER FOR THE CHECKMARK TO MOVE TO REST PAGE
  $("#checkmark").on("click", function() {
    location.href="timer";
  });

// BUTTON HANDLER FOR THE MANUAL INPUT OF REPS TO MOVE TO THE REST PAGE
  $("#submitReps").on("click", function() {
    location.href="timer";
  });

// BUTTON HANDLER FOR ENDING WORKOUT BUTTON. SAVES DATA TO DATABASE AND GOES TO POST WORKOUT SUMMARY
  $(".endWorkout").on("click", function() {
    location.href="postworkout";
  });

});