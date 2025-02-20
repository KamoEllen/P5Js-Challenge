
let current;
let snowflake = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  current = new Particle(height/2, 0);
}

function draw() {
  translate(width/2, height/2);
  rotate(PI/6);
  background(200, 120, 180); //soft purple

  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  

  snowflake.push(current);
  current = new Particle(height/2, 0);

  for (let i = 0; i < 6; i++) {
    rotate(PI/3);
    current.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    pop();
  }
}
