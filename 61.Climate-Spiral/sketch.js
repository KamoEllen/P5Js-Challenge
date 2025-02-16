let data;
function preload() {
    data = loadTable("giss-data-apr-11-2023.csv", "csv", "header");
  }
  
function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(88,22,34);;
    translate(width/2, height/2);

    //0 degree
    noFill();
    stroke(255);
    strokeWeight(4);
    circle(0,0,100);
    fill(255);
    noStroke();
    text("0°", 54,0);

    //1 degree
    noFill();
    stroke(255);
    strokeWeight(4);
    circle(0,0,300);
    fill(255);
    noStroke();
    text("1°", 154,0);

    //month
    noFill();
    stroke(255);
    strokeWeight(4);
    circle(0,0,500);
    fill(255);
    noStroke();
    text("Months", 255,0);

}