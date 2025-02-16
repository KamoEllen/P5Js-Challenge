let data;
let months;

function preload() {
    data = loadTable("giss-data-apr-11-2023.csv", "csv", "header");
  }
  
function setup() {
    createCanvas(600, 600);
    months = data.columns.slice(1);
    console.log(months);

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

    for (let i = 0; i < months.length; i++)
    {
        noStroke();
        fill(255);
        textAlign(CENTER);
        textSize(32);
        let angle = map(i,0,months.length, 0, TWO_PI);
        let x= 250 * cos(angle);
        let y = 250 * sin(angle); 
        // text(months[i],0,-250);
        text(months[i], x, y);
    }

}