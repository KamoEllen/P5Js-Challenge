function setup() {
    createCanvas(400, 360);
}

function draw() {
    background(0);                                           

    let hr = hour();
    let mn = minute();
    let sc = second();

    fill(255);
    noStroke();
    text(hr + ":" + mn  + ":" + sc , 10,200);
}