/*This file is for your custom js.  All yours*/
//business logic

var leapYear = function(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 = 0) {
    return true;
  }
  else {
    return false;
  }
}
