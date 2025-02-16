var tree = [];
var walkers = [];
var r =6;

function setup() {
    createCanvas(600, 600);
    tree[0] = new Walker(width/2, height/2,true);
    // tree[0] = createVector(width / 2, height / 2);
}

function draw() {
    background(0);

    var walkers = [];
    for (var i = 0; i < 10; i++)
    {
        walkers[i] = createVector(createVector(random(width), random(height)));
    }
    // var stuck = false;
    walker = createVector(random(width), random(height));

    
    
    tree.push(walker);

    for (var i = 0; i < tree.length; i++) {
        strokeWeight(r*2);
        stroke(255,100);
        point(tree[i].x, tree[i].y);
    }
}
