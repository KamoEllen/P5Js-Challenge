let r1 = 150;
let r2 = 20;
function setup() {
    createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
  }
  
  function draw() {
      background(70, 129,100);
      orbitControl();
      noFill();
  beginShape()
  for (let theta = 0; theta < 360; theta ++)
  {
    for (let phi = 0; phi < 360; phi += 10) {
    let x = (r1+ r2 *cos(phi)) * cos(theta);
    let y = (r1+ r2 *cos(phi)) * sin(theta)
    vertex(x,y)
    }
  }
  endShape()
  }
