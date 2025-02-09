let total = 200;
var r;


//pvector -obj that has and stores x and y
//can make x and y components from angle and scale by multiplying by radius
function setup() {
    createCanvas(200, 200);
    r = width / 2- 18; // radius
}



function getVector(index, total) {
    const angle = map(index % total, 0, total, 0, TWO_PI);
    const v = p5.Vector.fromAngle(angle + PI);
    v.mult(r);
    return v;
  }
  
function draw() {
    background(0);


    
    let factor = 2;
   
    translate(width / 2, height / 2); // origin is moved from 0,0 to the center of the canvas

    
    stroke(255, 150);
    strokeWeight(2);
    noFill();
    ellipse(0, 0, r * 2);


    strokeWeight(2);
    for (let i = 0; i < total; i++) {
      const a = getVector(i, total);
      const b = getVector(i * factor, total);
      line(a.x, a.y, b.x, b.y);
    }
  
}