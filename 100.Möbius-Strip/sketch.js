let r1 = 150;
let r2 = 20;
function setup() {
    createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
  }
  
  function draw() {
      background(70, 129,100);
      orbitControl();
      rotateX(90)
      strokeWeight(1);
  stroke(0);
  noFill();
  beginShape(POINTS);
  for (let theta = 0; theta < 360; theta+=10) {
    for (let phi = 0; phi < 360; phi += 10) {
      let x = (r1 + r2*cos(phi))*cos(theta);
      let y = (r1 + r2*cos(phi))*sin(theta);
      let z = r2*sin(phi)
      vertex(x, y, z);  
    }
  }
  endShape();
  }
