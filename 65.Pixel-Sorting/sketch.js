let img;
let sorted;
let index = 0;


let frameP;

function preload() {
    //https://www.google.com/url?sa=i&url=https%3A%2F%2Fmanypets.com%2Fus%2Fblog%2Fbest-esa-dog-breeds%2F&psig=AOvVaw361m5Tt75yG-JQV9oRy41q&ust=1739887654383000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCJjj1uLwyosDFQAAAAAdAAAAABAE
  img = loadImage("img.jpeg");
}

function setup() {
  createCanvas(400, 130);

  sorted = createImage(img.width, img.height);
  sorted = img.get();
  console.log("image copied");
  frameP = createP(frameRate());
}

function draw() {

  frameP.html("frameRate: " + nf(frameRate(), 2, 2));

  sorted.loadPixels();
  for (let n = 0; n < 1; n++) {
    let record = -1;
    let selectedPixel = index;
    for (let j = index; j < sorted.pixels.length; j += 4) {
      let pix = color(sorted.pixels[j], sorted.pixels[j + 1], sorted.pixels[j + 2], sorted.pixels[j + 3]);
      let b = hue(pix);
      if (b > record) {
        selectedPixel = j;
        record = b;
      }
    }

    let temp = [];
    //pixel's data can be accessed as: pixels[index], pixels[index+1], pixels[index+2], pixels[index+3]
    temp[0] = sorted.pixels[index];
    temp[1] = sorted.pixels[index + 1];
    temp[2] = sorted.pixels[index + 2];
    temp[3] = sorted.pixels[index + 3];
    sorted.pixels[index] = sorted.pixels[selectedPixel];
    sorted.pixels[index + 1] = sorted.pixels[selectedPixel + 1];
    sorted.pixels[index + 2] = sorted.pixels[selectedPixel + 2];
    sorted.pixels[index + 3] = sorted.pixels[selectedPixel + 3];
    sorted.pixels[selectedPixel] = temp[0];
    sorted.pixels[selectedPixel + 1] = temp[1];
    sorted.pixels[selectedPixel + 2] = temp[2];
    sorted.pixels[selectedPixel + 3] = temp[3];

    if (index < sorted.pixels.length - 1) {
      index += 4;
    }
  }

  sorted.updatePixels();

  background(0);


  let imgWidth = width / 2; 
  let imgHeight = (img.height / img.width) * imgWidth; 


  image(img, 0, 0, imgWidth, imgHeight);


  image(sorted, width / 2, 0, imgWidth, imgHeight);

  noStroke();
  fill(255);
}