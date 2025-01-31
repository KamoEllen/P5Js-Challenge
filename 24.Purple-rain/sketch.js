let drops = new Array(100).fill(null).map(() => new Drop());

function setup() {
    createCanvas(640, 360);
    for (var i = 0; i < drops.length;i++)
    {
      drops[i] = new Drop();  
    }
    
}

function draw() {
    background(230, 230, 250);
    for (var i = 0;i < drops.length; i++)
    {
        d.fall();
    drops[i].fall();
    drops[i].show();
}
}