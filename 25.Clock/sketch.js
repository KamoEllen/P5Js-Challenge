function setup() {
    createCanvas(400, 360);
    angleMode(DEGREES);
}

function draw() {
    background(0);  
    translate(200,200);
    rotate(-90);
    
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

    //when second gets to 60 , minute goes up by 1
    //seconds
    stroke(100,230,150);
    let secondAngle = map(sc,0,60,0,360);
    arc(0,0,150,150,0,secondAngle);//0-360 , complete circle

    push();
    rotate(secondAngle);
    stroke(100,230,150);
    line(0,0,70,0);
    pop();

    //minutes
    stroke(230,150,180);
    let minAngle = map(mn,0,60,0,360);
    arc(0,0,289,280,0,minAngle);//0-360 , complete circle

    push();
    rotate(minAngle);
    stroke(230,150,180);
    line(0,0,140,0);
    pop();

    //hour
    stroke(150,100,255);
    let hourAngle = map(hr %12,0,12,0,360);
    arc(0,0,200,200,0,hourAngle);//0-360 , complete circle

    push();
    rotate(hourAngle);
    stroke(150,100,255);
    line(0,0,100,0);
    pop();



    // fill(255);
    // noStroke();
    // text(hr + ":" + mn  + ":" + sc , 10,200);
}