let model; //name of brain that can generate 
//down -pen down
//up - pen up
//end - drawing finished
let x, y;
let strokePath = null;

function setup() {
  createCanvas(600, 600);
  background(29,  200,100); //drawing background once
  translate(width / 2, height / 2); 
  x =0
  y = 0;
  model = ml5.sketchRNN("flower", modelReady);

}

function modelReady()
{
  console.log("model ready");
  model.reset();
  model.generate(gotSketch);
}

function draw() {
   
    if (strokePath != null) {
      stroke(255);
      strokeWeight(4);
      let newX = x + strokePath.dx ;
      let newY = y + strokePath.dy ;
      line(x, y, newX, newY);
      strokePath = null;
      x =newX;
      y = newY;
      model.generate(gotSketch);
}
}

function gotSketch(error, s) { //all ml5 functions need error handling
  if (error) {
    console.error(error);
  } else {
    strokePath = s;
    console.log(strokePath);
  }
}
