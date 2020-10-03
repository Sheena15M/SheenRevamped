$(document).ready(function()


$(window).on("load", function () {
 currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
$("#currentDay").append(currentDate);
currentTime = moment().format("H");

})
);
