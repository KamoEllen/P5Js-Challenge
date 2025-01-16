let sun;

function setup() {
    createCanvas(600, 600);  
    sun = new Planet(50, 0);  
    sun.spawnMoons(5);
}
 
function draw() {
    background(0);
    translate(width/2 , height/2);
    sun.show();
   
}
