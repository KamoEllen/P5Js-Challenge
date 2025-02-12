let pies = [];
let plate;
let digitsDiv;
let digits = "3.";
const maxPies = 10; // Maximum number of pies allowed at a time

function setup() {
  createCanvas(400, 400);
  plate = new Plate(width / 2, 50);
  digitsDiv = createP(digits);
  digitsDiv.style("font-size", "64pt");
}

function draw() {
  background(0);

  // Add a new pie only if there are fewer than 10 pies
  if (random(1) < 0.02 && pies.length < maxPies) { 
    pies.push(new Pie(random(width), random(-100, 100)));
  }

  for (let pie of pies) {
    pie.show();
    pie.update();
  }

  //collisions or pies falling off the screen
  for (let i = pies.length - 1; i >= 0; i--) {
    if (plate.catches(pies[i])) {
      pies.splice(i, 1);
      digits += pies[i].digit;
      digitsDiv.html(digits);
    } else if (pies[i].y > height + pies[i].r) {
      pies.splice(i, 1);
    }
  }

 
  plate.x = mouseX;
  plate.show();
}