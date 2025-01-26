var blobs = [];

function setup() {
  createCanvas(400, 200);
  colorMode(HSB, 255);
  for (let i = 0; i < 10; i++) {
    blobs.push(new Blob(random(0, width), random(0, height)));
  }
}

function draw() {
  background(51);

  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let sum = 0;
      for (let i = 0; i < blobs.length; i++) {
        let xdif = x - blobs[i].x;
        let ydif = y - blobs[i].y;
        let d = sqrt((xdif * xdif) + (ydif * ydif));
        //formula 
        sum += (10 * blobs[i].r) / d;
      }
      let col = color(sum % 255, 255, 255);
      set(x, y, col);
    }
  }
  updatePixels();

  for (let i = 0; i < blobs.length; i++) {
    blobs[i].update();
  }
}