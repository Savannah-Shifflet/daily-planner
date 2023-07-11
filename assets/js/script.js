$(function () {
  // When save button clicked, the content is saved in local storage using the hour's id 
  $('.saveBtn').on("click", function (event){
    var hourId = event.target.parentNode.getAttribute('id');
    var input = $('#' + hourId).children('textarea').val();
    localStorage.setItem(hourId, input);
  })

  var hourContainer = $('#hourContainer').children()

  function init () {
    for (i = 0; i < hourContainer.length; i++) {
      var hourIdName = hourContainer[i].getAttribute('id');
      var hourNumber = hourIdName.slice(5);

      // get any user input that was saved in localStorage and set the values of the corresponding textarea elements
      var blockText = $('#' + hourIdName).children('textarea');
      $(blockText).text(localStorage.getItem(hourIdName));
      
      // Apply the past, present, or future class to each time block by comparing the id to the current hour.
      if(hourNumber === dayjs().format('H')) {
        $('#' + hourIdName).addClass("present");
      } else if (hourNumber > dayjs().format('H')) {
        $('#' + hourIdName).addClass("future");
      } else {
        $('#' + hourIdName).addClass("past");
      }
    }
  }

  init ();
  
  // Display the current date in the header of the page.
  setInterval(function() {
    var date = dayjs().format('MMMM D, YYYY');
    var time = dayjs().format('HH:mm:ss A');
    $('#currentDay').text(date + ' at ' + time);
  }, 1000);
});
