let model; //name of brain that can generate 
//down -pen down
//up - pen up
//end - drawing finished

function setup() {
  createCanvas(600, 600);
  model = ml5.sketchRNN("snowflake", modelReady);

}

function modelReady()
{
  console.log("model ready");
  model.reset();
  model.generate(gotSketch);
}

function draw() {
    background(29,  200.100);
}

function gotSketch(s) {

    strokePath = s;
    console.log(strokePath);
}
