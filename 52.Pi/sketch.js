//collect numbers in order to make pi
let pies = [];
let plate;
let digitsDiv;
let digits = "3.";

function setup() {
  createCanvas(400, 400);
//   for (var i = 0; i <12; i++) {
  //both start at random position
//   pies.push(new Pie(random(width), random(-100,200)));
//   }
    plate = new Plate(width / 2, 50);
    digitsDiv = createP(digits);
    digitsDiv.style("font-size", "64pt");
}
function draw() {
  background(0);
  //raining circles , new ones pop up in random spots and fall 
 if (random(1) < 0.001);
 {
    pies.push(new Pie(random(width), random(-100,-20)));

 }

//   for (var i = 0; i < pies.length; i++) {
for (let pie of pies)
{
    pie.show();
    pie.update();

    
  }

  for ( let i = pies.length-1; i >=0 ; i--)
  {
    if (plate.catches(pies[i])) {
        // console.log("Yay");
        //check which was caught and deal with score
        pies.splice(i,1);
        digits +=pies[i].digit;
        digitsDiv.html(digits);
      }
      
    else if (pies[i].y > height +  pies[i].r)
    {
        //eat
        pies.splice(i,1);
    }
  }
  console.log(pies.length);

  rectMode(CENTER);
  rect(mouseX, height - 10, 100, 10);

  plate.x = mouseX;
  plate.show();
}
