function setup() {
    createCanvas(400, 400);
    background(100,200,30);
    translate(width/2, height/2);// everythin relative to center

    var r = 100;
    beginShape();
    for (var a = -PI/2 ; a < PI/2 ; a+= 0.1 )
    {
       
        var x = r * cos(a);
        var y = r * sin(a);
        stroke(255);
        fill(200,50);
        strokeWeight(1);
        // point(x,y);
        vertex(x,y);
        r--; //making wing
    }
    endShape();
}
// function draw()
// {
//     background(100,200,30);
// }