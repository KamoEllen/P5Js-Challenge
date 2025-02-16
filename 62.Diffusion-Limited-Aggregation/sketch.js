var tree = [];
var walker;
var r =6;

function setup() {
    createCanvas(600, 600);
    tree[0] = createVector(width / 2, height / 2);
}

function draw() {
    background(0);

    var walkers = [];
    for (var i = 0; i < 10; i++)
    {
        walkers[i] = createVector(createVector(random(width), random(height)));
    }
    var stuck = false;
    walker = createVector(random(width), random(height));

    while (!stuck) {
        for (var i = 0; i < tree.length; i++) {
            var d = p5.Vector.dist(walker, tree[i]);
            if (d < r * 2) {
                stuck = true;
                break;
            }
        }
        var vel = p5.Vector.random2D();
        walker.add(vel);

        // walker.x += random(-2, 2);
        // walker.y += random(-2, 2);
        
       
        walker.x = constrain(walker.x, 0, width);
        walker.y = constrain(walker.y, 0, height);
    
}
    
    tree.push(walker);

    for (var i = 0; i < tree.length; i++) {
        strokeWeight(r*2);
        stroke(255,100);
        point(tree[i].x, tree[i].y);
    }
}
