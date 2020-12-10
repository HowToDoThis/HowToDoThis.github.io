// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2020 00:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();
  
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Output the result in an element with id="demo"
    var time = d + "d " + h + "h " + m + "m " + s + "s";
    document.getElementById("estimateDate1").innerHTML = time
    document.getElementById("estimateDate2").innerHTML = time
  
    var msg = "OVER ESTIMATED TIME! <br> " + time + "<br> Confirm with the owner whether there are no changes?";
    // If the count down is over, write some text 
    if (distance < 0) {
        document.getElementById("estimateDate1").innerHTML = msg;
        document.getElementById("estimateDate2").innerHTML = msg;
  }
}, 1000);