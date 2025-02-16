var tree = [];
var walker;
var r = 16;

function setup() {
    createCanvas(600, 600);
    tree[0] = createVector(width / 2, height / 2);
}

function draw() {
    background(0);
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
        walker.x += random(-2, 2);
        walker.y += random(-2, 2);
        
        // Corrected this part
        walker.x = constrain(walker.x, 0, width);
        walker.y = constrain(walker.y, 0, height);
    }
    
    tree.push(walker);

    for (var i = 0; i < tree.length; i++) {
        strokeWeight(r);
        stroke(255);
        point(tree[i].x, tree[i].y);
    }
}
