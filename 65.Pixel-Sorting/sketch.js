let img;

function preload() {
    img = loadImage("img.jpg");
}

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(0);


    let imgWidth = width / 2; 
    let imgHeight = (img.height / img.width) * imgWidth; // Maintain aspect ratio
    image(img, 0, 0, imgWidth, imgHeight);
}