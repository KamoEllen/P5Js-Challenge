var counter=0;
var timeLeft =20;
var timer;
function setup() {
  // createCanvas(400, 400);
  noCanvas();
  var timer= select('#timer')
  timer.html(convertSeconds(timeLeft - counter));

  function timeIt()
  {
    counter++;
    timer.html(convertSeconds(timeLeft - counter));
  }

  setInterval(timeIt,1000); 
}

function convertSeconds(s)
{
  var min = floor(s /60); 
  var sec = s % 60; 
  return nf(min,2) + ':' + nf(sec,2);
}

function draw() {
  background(200,  100,29);
}