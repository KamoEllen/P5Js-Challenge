function setup() {
    createCanvas(400, 400);
    background(100,200,30);
    translate(width/2, height/2);// everythin relative to center

    var r = 100;
    beginShape();
    var xoff= 0; 
    for (var a = -PI/2 ; a < PI/2 ; a+= 0.1 )
    {
        var n = noise(xoff);
       var r = map(n,0,1,50,125);
        var x = r * cos(a);
        var y = r * sin(a);
        xoff +=0.2;
        stroke(255);
        fill(200,50);
        strokeWeight(1);
        // point(x,y);
        vertex(x,y);
        // r--; //making wing
    }
    endShape();
}
// function draw()
// {
//     background(100,200,30);
// }