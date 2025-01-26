function setup() {
    createCanvas(300,300);
  }
  
  function draw() {
    background(51);
    loadPixels();

    for (var x = 0; x < width; x++)
    {
        for (var y = 0; y < height; y++)
        {
            var col = color(255, 0, 255);
            set(x, y, col);

        }
    }
    updatePixels();
  }