let w = 24;
let angle = 0;
function setup() {
    createCanvas(300, 300);
}
function draw()
{
    background(90,90,90);
    translate(width/2, height/2); //center
    rectMode(CENTER);

    let offset = 0;

    for(let x = 0; x < width; x += w)
    {
        let a = angle + offset;
        //harmonic motion rectangle
        let h = map(sin(a), -1,1,0,100);
        fill(255);
        rect(x-width/2 + w/2,0,w-2,h);
        offset += -0.1;
    
    }

    

    angle += 0.1;
}