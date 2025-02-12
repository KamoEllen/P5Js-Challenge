var digits = 6;
var piDigits = ""; 

function setup() {
    createCanvas(400, 400);
    background(0);
    noLoop();

  
    piDigits = calculatePi(digits);

    
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(piDigits, width / 2, height / 2);
}

function calculatePi(numDigits) {
   
    let pi = 0;
    for (let k = 0; k <= numDigits; k++) {
        pi += (1 / Math.pow(16, k)) * (
            (4 / (8 * k + 1)) -
            (2 / (8 * k + 4)) -
            (1 / (8 * k + 5)) -
            (1 / (8 * k + 6))
        );
    }
       return pi.toFixed(numDigits);
}

function draw() {

}