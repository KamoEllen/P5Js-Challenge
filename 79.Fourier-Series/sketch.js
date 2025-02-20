let time = 0;
function setup() {
    createCanvas(600, 400);

  }
  
  function draw() { //draw loops each frame
    background(141, 22,100 ); //purple
    translate(200,200);

    //cirlce
    let radius =90;
    noFill();
    stroke(0,100,66);
    ellipse(0,0,radius*2);

    //polar coordinates
    //x = r * cos(time);
    //y =  r * sin(time);

    let x = radius * cos(time);
    let y  = radius * sin(time);
    fill(30,90,100);
    //line from origin to small circle
    line(0,0,x,y);
    ellipse(x,y,8);




    time -= 0.07;
  
  }