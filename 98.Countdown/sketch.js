var counter=0;
var timer;
function setup() {
  // createCanvas(400, 400);
  noCanvas();
  var timer= select('#timer')
  timer.html(counter)

  function timeIt()
  {
    counter++;
    timer.html(counter);
  }

  setInterval(timeIt,1000); 
}

function draw() {
  background(200,  100,29);
}