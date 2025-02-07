let defaultColor = [255, 0, 0];
let colors = [
  [0, 0, 0],   // black for 0
  [0, 185, 63],    // green for 1
  [0, 104, 255],   // blue for 2
  [122, 0, 229]    // purple for 3
];

let sandpiles;
let nextpiles;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  
  sandpiles = new Array(width).fill().map(i => new Array(height).fill(0));
  nextpiles = new Array(width).fill().map(i => new Array(height).fill(0));
  
  sandpiles[width/2][height/2] = 1000000000;
  
  background(defaultColor[0], defaultColor[1], defaultColor[2]);
}

function render() {
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let num = sandpiles[x][y];
      let col = defaultColor;
      if (num == 0) col = colors[0];
      else if (num == 1) col = colors[1];
      else if (num == 2) col = colors[2];
      else if (num == 3) col = colors[3];

      let pix = (x + y * width) * 4;
      pixels[pix] = col[0];
      pixels[pix + 1] = col[1];
      pixels[pix + 2] = col[2];
    }
  }
  updatePixels();
}

function draw() {
  render();
}