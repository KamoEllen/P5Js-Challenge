let pies = [];
let plate;

function setup() {
  createCanvas(400, 400);
  //both start at random position
  pies[0] = new Pie(random(width), 100);
  pies[1] = new Pie(random(width), 100);
    plate = new Plate(width / 2, 100);
}
function draw() {
  background(0);

  for (var i = 0; i < pies.length; i++) {
    pies[i].show();
    pies[i].update();

    if (plate.catches(pies[i])) {
      console.log("Yay");
    }
  }
  rectMode(CENTER);
  rect(mouseX, height - 10, 100, 10);

  plate.x = mouseX;
  plate.show();
}
