let blob;

class Blob {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, 50, 50);
    }
}

function setup() {
    createCanvas(300, 300);
    blob = new Blob();
}
  
  function draw() {
    background(51);
    
    loadPixels();

    for (var x = 0; x < width; x++)
    {
        for (var y = 0; y < height; y++)
        {
           
            var index = (x + y * width) * 4;
            var c = color(x, 0, y);
            pixels[index] = red(c);
            // var d = dist(x,y,width/2,height/2);
            // pixels[index] = color(d)
            pixels[index + 1] = green(c);
            pixels[index + 2] = blue(c);
            pixels[index + 3] = alpha(c);

        }
    }
    updatePixels();
    blob.show(x,y);
   
  }