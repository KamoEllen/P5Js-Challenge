let drops = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 20; i++) {
        addInk(300, height / 2, 50);
    }
    for (let i = 0; i < 50; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        addInk(x, y, r);
    }
}

let start;

function mousePressed() {
    start = createVector(mouseX, mouseY);
}

function mouseDragged() {
    let end = createVector(mouseX, mouseY);
    end.sub(start);
    end.normalize();
    tineLine(end, mouseX, mouseY, 2, 16);
}

function tineLine(v, x, y, z, c) {
    for (let drop of drops) {
        drop.tine(v, x, y, z, c);
    }
}

function addInk(x, y, r) {
    let drop = new Drop(x, y, r);
    for (let other of drops) {
        other.marble(drop);
    }
    drops.push(drop);
}

function draw() {
    background(255);
    for (let drop of drops) {
        drop.show();
    }
}
