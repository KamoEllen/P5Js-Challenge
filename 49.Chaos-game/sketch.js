let ax, ay;
let bx, by;
let cx, cy;

let x,y;

function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    strokeWeight(8); // thickness
    background(0); // Clear the canvas every frame

    // Generate new random positions
    ax = random(width);
    ay = random(height);
    bx = random(width);
    by = random(height);
    cx = random(width);
    cy = random(height);

    x = random(width);
    y = random(height);

    // Draw the points
    point(ax, ay);
    point(bx, by);
    point(cx, cy);
}

function draw() {
    stroke(255,0,255);
    point(x,y);

    //picking random point n movinghalfway there
    let r = floor(random(3));
    if (r == 0)
    {
        x = lerp(x,ax,0.5);
        y = lerp(y,ay,0.5);
    }
    else if ( r==1)
        {
            x = lerp(x,bx,0.5);
            y = lerp(y,by,0.5);
        }
    else if ( r==2)
    {
        x = lerp(x,cx,0.5);
        y = lerp(y,cy,0.5);
    }

}