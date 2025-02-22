let model; //name of brain that can generate 

function setup() {
  createCanvas(600, 600);
  model = ml5.sketchRNN("snowflake", modelReady);

}

function modelReady()
{
  console.log("model ready");
}

function draw() {
    background(29,  200.100);
}