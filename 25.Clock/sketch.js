function setup() {
    createCanvas(400, 360);
    angleMode(DEGREES);
}

function draw() {
    background(0);  
    
    //displays corect time

    let hr = hour();
    let mn = minute();
    let sc = second();

    // strokeWeight(4);
    // stroke(255);
    // noFill();
    // ellipse(200,200,200,200);

    strokeWeight(8);
    noFill();
    stroke(255,100,150);
    let end = map(sc,0,60,0,360);
    arc(200,200,200,200,0,180);//0-360 , complete circle

    // fill(255);
    // noStroke();
    // text(hr + ":" + mn  + ":" + sc , 10,200);
}