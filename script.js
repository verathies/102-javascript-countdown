
// Set the date we're counting down to
var countDownDate = new Date("Feb 14, 2020 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "days " + hours + "h "
  + minutes + "min " + seconds + "sec ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Enjoy Bali!";
  }
}, 1000);

// change color of button 
var bali =document.getElementById("bali"); 
var image;
var sneakPeakButton = document.getElementById("sneakPeakButton"); 
var sneakPeak = false; 


var changeColor= function() {
  if (sneakPeak === false){
    sneakPeak= true; 
    sneakPeakButton.style.backgroundColor="#218b82";
    sneakPeakButton.innerText= "Sneak Peak over!";
    image= "img/surf.jpg";
    
  } else {
    sneakPeak= false; 
    sneakPeakButton.innerText= "Sneak Peak!";
    sneakPeakButton.style.backgroundColor="#000";
    image="img/bali.jpg";
  }
 bali.src=image; 
};
sneakPeakButton.addEventListener('click', changeColor); 