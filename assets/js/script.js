//Daily Calendar
//created by Christopher Borer

//Element variables
var eventEl = document.getElementById("event-rows");
var iconEl = '<img src="./assets/images/calendar-plus-solid.svg"></img>';

//Class variables
var divClass1 = "col-2";
var divClass10 = "col-8";

//Date varaibles
var hoursInDay = 24;
var now = moment();
var today = now.format("dddd MMMM Do YYYY");
var endOfDay = now.endOf("day");

//Data
var schedule = {
    hour05: "learn java script"
};

//Display the current date in the header
var displayCurrentDate = function (currentDate) {
  $("#currentDay").html(currentDate);
};

//Get the start of day hour
var getStartOfday = function (currentHour) {
  const startOfDay = currentHour.startOf("day");
  //console.log('start of day  ' + startOfDay.format("HH"));

  //calss getschedule to pull from local storage
  getSchedule();
  //Call add events to update hours on main page
  addEvents(startOfDay);
};

//Build out the calendar events.
var addEvents = function (startOfDay) {
  //console.log(startOfDay.format('HH'));
  let newHour = parseInt(startOfDay.format("HH"));

  for (let i = 1; newHour < hoursInDay; newHour++) {
    startOfDay.add(i, "hour");
    let row = document.createElement("div");
    row.className = "row";
    let timeStamp = document.createElement("div");
    timeStamp.className = divClass1;
    let toDo = document.createElement("textarea");
    let timeOfDay = " present";
    if(startOfDay < now.format("HH")) {
        timeOfDay = " past";
    }
    else if(startOfDay > now.add(1, 'hour').format('HH')) {
        timeOfDay = " future";
    }
    toDo.className = divClass10 + timeOfDay;
    let id = "hour" + startOfDay.format("HH");
    toDo.id = id;
    let editTask = document.createElement("button");
    editTask.className = divClass1 + " saveBtn ";
    
    timeStamp.textContent = startOfDay.format("LT");
    toDo.value = schedule[id] || "";
    editTask.innerHTML = iconEl;

    row.append(timeStamp, toDo, editTask);
    eventEl.append(row);
    editTask.addEventListener("click", editEvents);
  }
};

var editEvents = function(event) {
    let row = event.target.closest(".row");
    let textarea = row.querySelector("textarea");
    let id = textarea.id;
    let task = textarea.value;
    schedule[id] = task;
    saveSchedule();
}

var saveSchedule = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

var getSchedule = function() {
    let data = localStorage.getItem("schedule");
    if(data) {
        schedule = JSON.parse(data);
    }
    else {
        schedule = {};
    }
}

//function calls
getStartOfday(now);
displayCurrentDate(today);

