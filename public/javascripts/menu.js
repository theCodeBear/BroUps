$(function() {

  Parse.initialize("O3sPTbDHqRJXXW67UEHwZzOVih4FYKT5yqnng5CS", "gLsoZuPGEIHXxRFsW6n5fISA1c1yD7EsjW6ewgup");

//  Disable "Start Workout" button if database has no workouts
  if (true /* no workouts are found */) {
    $("button#startWorkout").prop("disabled", true);
  } 

  $("#startWorkout").on("click", function() {
    location.href = "preworkout";
  });

  $("#addExercise").on("click", function() {
    location.href = "createExercise";
  });

  $("#workoutHistory").on("click", function() {
    location.href = "history";
  });

  $("#workoutStats").on("click", function() {
    location.href = "stats";
  });

});