function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });
    var month = now.toLocaleString('en-us', { month: 'long' });
    var dayOfMonth = now.getDate();
    var year = now.getFullYear();
  
    // Add leading zero if the digit is less than 10
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("day").innerHTML = dayOfWeek;
    document.getElementById("month").innerHTML = month;
    document.getElementById("dayOfMonth").innerHTML = dayOfMonth;
    document.getElementById("year").innerHTML = year;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();