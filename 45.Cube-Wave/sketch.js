let w = 24;
let angle = 0;
function setup() {
    createCanvas(300, 300, WEBGL);
}
function draw()
{
    background(90,90,90);
    translate(0,50,-50);
    rotateX(-PI/8);
    // translate(width/2, height/2); //center
    rectMode(CENTER);
    rotateX(angle  * 0.25); //slow rotation around x axis
    // rotateY(angle  * 0.25); //slow rotation around y axis

    let offset = 0;

    for(let x = 0; x < width; x += w)
    {
        push();
        let a = angle + offset;
        //harmonic motion rectangle
        let h = map(sin(a), -1,1,0,100);
        fill(255);
        translate(x-width/2 + w,0,0);
        box(w, h , w);
        // rect(x-width/2 + w/2,0,w-2,h);
        // rect(x-width/2 + w/2,0,w-2,h);
        offset += -0.1;
        pop();
    
    }

    

    angle += 0.1;
}