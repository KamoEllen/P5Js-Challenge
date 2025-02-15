const c = 30;
const G = 6;  //grav constant
const dt = 0.1;
let m87;

const particles = [];

function setup() {
    createCanvas(600, 600);
   
    m87 = new Blackhole(100,320,3500);

    let start = height/2;
    let end = height/2 - m87.rs*2.6;

    for (let y = end; y < start; y+=10)
    {
        particles.push(new Photon(width-20,y));
    }

}
function draw()
{
    background(255);
    m87.show();

    for (let p of particles)
    {
        m87.pull(p);
        p.update();
        p.show();
    }
}