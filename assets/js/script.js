//Daily Calendar
//created by Christopher Borer

//Element variables
var eventEl = document.getElementById("event-rows");
var iconEl = '<img src="./assets/images/calendar-plus-solid.svg"></img>';

//Class variables
var divClass1 = "col-2 border border-dark";
var divClass10 = "col-8 border border-dark";

//Date varaibles
var hoursInDay = 24;
var now = moment();
var today = now.format("dddd MMMM Do YYYY");
var endOfDay = now.endOf("day");

//Display the current date in the header
var displayCurrentDate = function (currentDate) {
  $("#currentDay").html(currentDate);
};

//Get the start of day hour
var getStartOfday = function (currentHour) {
  const startOfDay = currentHour.startOf("day");
  //console.log('start of day  ' + startOfDay.format("HH"));

  //Call add events to update hours on main page
  addEvents(startOfDay);
};

//Build out the calendar events.
var addEvents = function (startOfDay) {
  //console.log(startOfDay.format('HH'));
  let newHour = parseInt(startOfDay.format("HH"));

  for (let i = 1; newHour < hoursInDay; newHour++) {
    let timeStamp = document.createElement("div");
    timeStamp.className = divClass1;
    let toDo = document.createElement("div");
    toDo.className = divClass10;
    let editTask = document.createElement("div");
    editTask.className = divClass1;

    startOfDay.add(i, "hour");
    timeStamp.textContent = startOfDay.format("LT");
    toDo.textContent = i;
    editTask.innerHTML = iconEl;

    eventEl.append(timeStamp);
    eventEl.append(toDo);
    eventEl.append(editTask);
  }
};
//add and edit button to each event date row.
//give color to the rows based on date values

//function calls
getStartOfday(now);
displayCurrentDate(today);
