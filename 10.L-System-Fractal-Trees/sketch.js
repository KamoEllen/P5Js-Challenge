// L-system visualization using p5.js
// Generates a plant-like fractal structure using string replacement rules

let axiom = "F";
let sentence = axiom;
let rules = [];
let len = 100;
let angle;

// Define the replacement rule for the plant structure
rules[0] = {
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]"
};

function setup() {
    createCanvas(400, 400);
    angle = radians(25);
    background(51);
    createP(axiom);
    turtle();
    
    // Create and position the generate button
    let button = createButton("generate");
    button.mousePressed(generate);
}

function generate() {
    len *= 0.5;
    let nextSentence = "";
    
    // Apply replacement rules
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        let found = false;
        
        for (let j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
                found = true;
                nextSentence += rules[j].b;
                break;
            }
        }
        
        if (!found) {
            nextSentence += current;
        }
    }
    
    sentence = nextSentence;
    createP(sentence);
    turtle();
}

function turtle() {
    background(51);
    resetMatrix();
    translate(width/2, height);
    stroke(255, 100);
    
    // Turtle graphics engine
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        
        switch(current) {
            case "F":
                line(0, 0, 0, -len);
                translate(0, -len);
                break;
            case "+":
                rotate(angle);
                break;
            case "-":
                rotate(-angle);  // Fixed: negative angle for counter-clockwise rotation
                break;
            case "[":
                push();
                break;
            case "]":
                pop();
                break;
        }
    }
}