let data;
let months;
let zeroRadius = 125;
let oneRadius = 200;

function preload() {
    data = loadTable("giss-data-apr-11-2023.csv", "csv", "header");
  }
  
function setup() {
    createCanvas(600, 600);
    // months = data.columns.slice(1);
    // console.log(months);
    months = [
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
      ];

}

function draw() {
    background(88,22,34);;
    translate(width/2, height/2);

    //0 degree
    noFill();
    stroke(255);
    strokeWeight(4);
    circle(0, 0, zeroRadius * 2);
    fill(255);
    noStroke();
    text("0°", zeroRadius+10,0);

    //1 degree
    noFill();
    stroke(255);
    strokeWeight(4);
    circle(0, 0, oneRadius * 2);
    fill(255);
    noStroke();
    text("1°",oneRadius+10,0);

    //month
    noFill();
    stroke(255);
    strokeWeight(4);
    circle(0,0,500);
    fill(255);
    noStroke();
    // text("Months", 255,0);

    for (let i = 0; i < months.length; i++) {
        noStroke();
        fill(255);
        textSize(24);
        let angle = map(i, 0, months.length, 0, TWO_PI);
        push();
        let x = 264 * cos(angle);
        let y = 264 * sin(angle);
        translate(x, y);
        rotate(angle + PI / 2);
        text(months[i], 0, 0);
        pop();
      }

      let row = data.getRow(0);
      let year = row.get("Year");
      textAlign(CENTER,CENTER);
      text(year,0,0);
      for (let i = 0; i < months.length;i++)
      {
        strokeWeight(4);
        stroke(2);
        let anomoly = row.getNum(months[i]);
        let angle = map(i,0,months.length, 0, TWO_PI) +PI/2;
        let x = 50 * cos(angle);
        let y = 50 * sin(angle);
        circle(x,y,16);
      }
      noLoop();


}