const c = 30;
const G = 6;  //grav constant
let m87;

function setup() {
    createCanvas(600, 600);
    m87 = new Blackhole(100,320,6500);
}
function draw()
{
    background(255);
    m87.show();
}