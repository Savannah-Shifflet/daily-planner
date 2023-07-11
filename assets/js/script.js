// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // When save button clicked, the content is saved in local storage using the hour's id 
  $('.saveBtn').on("click", function (event){
    var hourId = event.target.parentNode.getAttribute('id');
    var input = $('#' + hourId).children('textarea').val();
    localStorage.setItem(hourId, input);
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // Display the current date in the header of the page.
  setInterval(function() {
    var date = dayjs().format('MMMM D, YYYY');
    var time = dayjs().format('HH:mm:ss A');
    $('#currentDay').text(date + ' at ' + time);
  }, 1000);
});
