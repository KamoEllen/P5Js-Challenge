// alternating series where the terms are reciprocals of odd integers, with signs alternating between positive and negative.
let pi = 4;
let iteration = 0;
let history = [];
let div;

function setup() {
    createCanvas(600, 600);
    div = createDiv(pi).style('font-size', '64pt');
}

function draw() {
    background(22, 88, 66);
    for (let i = 0; i < 10; i++) {
        let den = iteration * 2 + 3;
        if (iteration % 2 == 0) {
            pi -= (4 / den);
        } else {
            pi += (4 / den);
        }
        history.push(pi);
        beginShape();
        noFill();
        stroke(255);
        strokeWeight(2);
        let spacing = width / history.length;
        for (let i = 0; i < history.length; i++) {
            let x = i * spacing;
            let y = map(history[i], 2, 4, height,0);
            vertex(x, y);
        }
        endShape();
        div.html(pi);
        iteration++;
    }
}