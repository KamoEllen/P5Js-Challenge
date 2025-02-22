let model;
let strokePath = null;

let x, y;
let pen = "down";

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(-width / 2, width / 2);
  y = random(-height / 2, height / 2);
  model = ml5.sketchRNN("snowflake", modelReady);
  background(29, 200, 100);
  frameRate(60); // Increase frame rate for smoother drawing
}

function modelReady() {
  console.log("model ready");
  model.reset();
  model.generate(gotSketch);
}

function draw() {
  translate(width / 2, height / 2);

  if (strokePath != null) {
    let newX = x + strokePath.dx * 2; // Increase scaling factor for faster drawing
    let newY = y + strokePath.dy * 2; // Increase scaling factor for faster drawing

    if (pen == "down") {
      stroke(255);
      strokeWeight(2);
      line(x, y, newX, newY);
    }

    pen = strokePath.pen;
    x = newX;
    y = newY;

    if (pen !== "end") {
      model.generate(gotSketch); // Request the next stroke
    } else {
      console.log("drawing complete");
      model.reset();
      model.generate(gotSketch); // Start a new drawing
      x = random(-width / 2, width / 2);
      y = random(-height / 2, height / 2);
    }

    strokePath = null; // Reset strokePath after processing
  }
}

function gotSketch(error, s) {
  if (error) {
    console.error(error);
  } else {
    strokePath = s; // Store the new stroke
  }
}