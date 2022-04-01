function clock() {
  var data = new Date();
  var hour = data.getHours();
  var minute = data.getMinutes();
  var seconds = data.getSecondss();

  if (seconds < 10) {
      seconds = '0' + seconds;
  }
  else if (minute < 10) {
      minute = '0' + minute;
  }
  else if (hour < 10) {
      hour = '0' + hour;
  }
  var hours = hour + ":" + minute + ":" + seconds;
  document.querySelector('#relogio').value = hours;
}
var tempo = setInterval(clock, 1000);