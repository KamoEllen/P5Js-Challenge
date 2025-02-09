let total = 200;
var r;


//pvector -obj that has and stores x and y
//can make x and y components from angle and scale by multiplying by radius
function setup() {
    createCanvas(200, 200);
    r = width / 2- 18; // radius
}


function getVector(index) {
    const angle = map(index % total, 0, total, 0, TWO_PI);
    const v = p5.Vector.fromAngle(angle + PI); //adding pi moved it 180 degre
    v.mult(r);
    return v;
  }

function draw() {
    background(0);
    let factor = 2;
   
    translate(width / 2, height / 2); // origin is moved from 0,0 to the center of the canvas

    // main circle with no stroke
    noFill();
    // stroke(255);
    ellipse(0, 0, r * 2);

    // Draw 10 points around the circumference of the main circle
    for (var i = 0; i < total; i++) {
        // var angle = map(i, 0, total, 0, TWO_PI);
        // var x = r * cos(angle);
        // var y = r * sin(angle);
        const v = getVector(i);
        // strokeWeight(2);
        fill(255);
        // noStroke();
        // ellipse(0, 0, r * 2);
        ellipse(v.x, v.y, 10); //small circle at each point
    }

    stroke(255);
    strokeWeight(2);
    for (var i = 0; i < total; i++)
    {
        //a point connects to b
        //modulo operator  used, 6 * 2 = 12 but only want 2. 12%10 = 1rem2. 12mod10 is 2
        const a = getVector(i);
        const b = getVector(i * factor);
        // line(a.x,a.y, b.x,b.y);
        line(a.x, a.y, b.x, b.y);
    }
}