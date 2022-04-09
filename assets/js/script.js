$(document).ready(function () {
    //display current day
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  //Pulling the values on click
  $(".saveBtn").on("click", function () {
    let desc = $(this).siblings(".description").val();
    let timeStamp = $(this).parent().attr("id");
    //save to local storage
    localStorage.setItem(timeStamp, desc);
  });

  var colorCode = function () {
    let currentHour = moment().hours();
    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id").split("-")[1]);
      //Compare current hour to block hour
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else if (blockHour > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  };
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  var interval = setInterval(colorCode, 20000);

  //function calls
  colorCode();
});
