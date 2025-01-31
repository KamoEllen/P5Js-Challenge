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
    stroke(200,230,150);
    let end1 = map(sc,0,60,0,360);
    arc(0,0,150,150,0,end1);//0-360 , complete circle

    //minutes
    stroke(230,150,180);
    let end2 = map(mn,0,60,0,360);
    arc(0,0,289,280,0,end2);//0-360 , complete circle

    //hour
    stroke(150,100,255);
    let end3 = map(hr %12,0,12,0,360);
    arc(0,0,200,200,0,end3);//0-360 , complete circle



    // fill(255);
    // noStroke();
    // text(hr + ":" + mn  + ":" + sc , 10,200);
}