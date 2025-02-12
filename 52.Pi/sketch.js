let pie;
let plate;

function setup() {
    createCanvas(400, 400);
    pie = new Pie(100,100);
    plate  = new Plate(width/2, 100);
  }
  function draw() {
    background(0);
  
    rectMode(CENTER);
    rect(mouseX, height-10,100,10 );
    pie.show();
    pie.update();

    if (plate.catches(pie))
    {
        console.log("Yay");
    }
    
    plate.x =mouseX;
    plate.show();
  }
  