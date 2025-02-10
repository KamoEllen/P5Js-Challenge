let w = 24;
let angle = 0;
let angle_magic;
let maxD;
function setup() {
    createCanvas(400, 400, WEBGL);
    angle_magic = atan(1/sqrt(2));
    maxD = dist(0,0,200,200);
    
}
function draw()
{
    background(100);
    // frameRate(2);
    //orthographic projection(not perspective)
    ortho(-300,300,300,-300 , 0,1000);//flat
    // directionalLight(255,255,255,0,-1,0); //shading 
    // ambientLight(255,255,255,0,-1,0);


    // translate(0,0,-100);
    // rotateX(-PI/8);
    rotateX(QUARTER_PI);
    rotateY(angle_magic);
    // translate(width/2, height/2); //center
    rectMode(CENTER);
    // rotateX(angle  * 0.25); //slow rotation around x axis
    // rotateY(angle  * 0.25); //slow rotation around y axis

    // let offset = 0;

    for(let z = 0; z < height; z += w)
    {
        for(let x = 0; x < width; x += w)
            {
        push();

        let d = dist(x,z,width/2,height/2);
        let offset = map(d,0,maxD, -6,2);

        let a = angle + offset;

        //harmonic motion rectangle
        let h = floor(map(sin(a), -1,1,100,300));
        // fill(255);
        translate(x-width/2 + w,0,z -  height/2);
        ambientMaterial(255);
        normalMaterial();
        box(w -2, h , w -  2);
        // rect(x-width/2 + w/2,0,w-2,h);
        // rect(x-width/2 + w/2,0,w-2,h);
        
        pop();
            }
            // offset += -0.1;
    
    }

    

    angle += 0.1;
}