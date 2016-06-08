/*This file is for your custom js.  All yours*/
//business logic

var leapYear = function(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true;
  }
  else {
    return false;
  }
}

// user interface
$(function () {
  $("form#year-input").submit(function (event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    if (year <= 0) {
      alert("Please enter a positive integer");
      $(".year").addClass("has-error");
    }
    else {
      if (leapYear(year) === true) {
        $("#output").html("<p>" + year + " is a leap year</p>")
      }
      else {
        $("#output").html("<p>" + year + " is NOT a leap year</p>")
      }
    }
  })
})
