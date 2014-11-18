$(function() {


  // BUTTON HANDLER FOR ENDING WORKOUT BUTTON. SAVES DATA TO DATABASE AND GOES TO POST WORKOUT SUMMARY
  $(".endWorkout").on("click", function() {
    location.href="postworkout";
  });


// takes the time to put on the clock in seconds
  function timer(time) {
    var clock = formatTime(time);
    if (time < 0) {
      location.href = "workout";
      // process.stdout.clearLine();
      // process.stdout.cursorTo(0);
      // console.log("--------------------------------\n");
    // Do the action at the end of each countdown:
      // broUps(setNum++);
      return;
    }
    // process.stdout.clearLine();
    // process.stdout.cursorTo(0);
    // process.stdout.write(clock);
    console.log(time);
    console.log(clock);
    document.getElementById("clock").innerHTML=clock;
    setTimeout(timer, 1000, --time);
  }


  function formatTime(time) {
    var secs = (time%60 > 9) ? (time%60) : "0"+(time%60);
    return Math.floor(time/60) + ":" + secs;
  } 

  // arguments: timer function, rest time + two seconds (in milliseconds), rest time in seconds.
  // setInterval(timer, 12000, 10);
  timer(10/* need to put variable in here from workout for time to rest*/);


});