let x, y;
let px, py;

let step = 1;
let stepSize = 30; 
let numberSteps = 1; //right
var state = 0; //right
let turnCounter = 0;
let totalSteps;

function setup() {
    createCanvas(500, 500);

    const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;


    x = width / 2;
    y = height / 2;
    px = x;
    py =y;
    background(0);
   
    
}


function draw() {

    //numbers
    // textSize(20);
    // textAlign(CENTER, CENTER); 
    //     fill(255);
    // text(step, x, y);


    //rect
    // fill(127);
    // stroke(255);
    // rectMode(CENTER);
    // square(x,y,stepSize)

    //circles
    fill(127);
    stroke(255);
    circle(x,y,stepSize* 0.25);
    line(x,y,px,py);
    px = x;
    py = y;



    switch (state) {
        case 0:
            x += stepSize; // Move right
            break;
        case 1:
            y -= stepSize; // Move up
            break;
        case 2:
            x -= stepSize; // Move left
            break;
        case 3:
            y += stepSize; // Move down
            break;
    }

  
    // Change direction every 2 steps
    if (step % numberSteps == 0) {
        state = (state + 1) % 4;
        turnCounter++;
        if (turnCounter % 2 == 0)
        {
            numberSteps++;
        }
    }
    frameRate(4);
    step++;

    if(step > totalSteps)
    {
        noLoop();
    }
}