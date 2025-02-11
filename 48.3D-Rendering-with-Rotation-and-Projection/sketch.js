let angle = 0;
let points = [];
let projection = []

projection = 
[
    [1,0,0],
    [0,1,0]
]

function setup() {
    createCanvas(400,400);
    //4 points of a square
    points[0] = createVector(-50,-50 , 0);
    points[1] = createVector(50,-50 , 0);
    points[2] = createVector(50,50, 0);
    points[3] = createVector(-50,50, 0);
    
}
function draw()
{
    background(200,70,40);
    translate(width/2, height/2);
    stroke(255);
    strokeWeight(14);
    noFill();

    //drawing points
    for (let v = 0; v < points.length; v++) 
    {
        // point(v.x, v.y);
        point(points[v].x, points[v].y);// Access the vector using points[v]
    }

    angle +=0.01;
}