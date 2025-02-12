let pies = [];
let plate;

function setup() {
  createCanvas(400, 400);
//   for (var i = 0; i <12; i++) {
  //both start at random position
//   pies.push(new Pie(random(width), random(-100,200)));
//   }
    plate = new Plate(width / 2, 100);
}
function draw() {
  background(0);
  pies.push(new Pie(random(width), random(-100,200)));


//   for (var i = 0; i < pies.length; i++) {
for (let pie of pies)
{
    pie.show();
    pie.update();

    if (plate.catches(pie)) {
      console.log("Yay");
    }
  }
  rectMode(CENTER);
  rect(mouseX, height - 10, 100, 10);

  plate.x = mouseX;
  plate.show();
}
