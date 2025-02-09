let total = 10;
var r;

//pvector -obj that has and stores x and y
//can make x and y components from angle and scale by multiplying by radius
function setup() {
    createCanvas(200, 200);
    r = width / 2; // radius
}

function getVector(index) {
    const angle = map(index, 0, total, 0, TWO_PI);
    const v = p5.Vector.fromAngle(angle);
    v.mult(r);
    return v;
  }

function draw() {
    background(51);
   
    translate(width / 2, height / 2); // origin is moved from 0,0 to the center of the canvas

    // main circle with no stroke
    noFill();
    // stroke(255);
    ellipse(0, 0, r * 2);

    // Draw 10 points around the circumference of the main circle
    for (var i = 0; i < total; i++) {
        var angle = map(i, 0, total, 0, TWO_PI);
        var x = r * cos(angle);
        var y = r * sin(angle);
        fill(255);
        noStroke();
        ellipse(x, y, 10); //small circle at each point
    }

    for (var i = 0; i < total; i++)
    {
        //a point connects to b
        const a = getVector(i, total);
        const b = getVector(i * factor, total);
    }
}