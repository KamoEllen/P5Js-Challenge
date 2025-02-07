let sandpiles;
function setup() {
    createCanvas(400, 400);
   
    sandpiles = new Array(width).fill().map(() => new Array(height).fill(0));
}

function draw() {
    background(90,40, 120); //blue
}