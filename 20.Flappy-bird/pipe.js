function Pipe() {
    // Gap between top and bottom pipes
    this.gap = 100; 
    let gapPosition = random(this.gap, height - this.gap);

    // Top pipe height
    this.top = gapPosition - this.gap / 2;
    // Bottom pipe height
    this.bottom = height - (gapPosition + this.gap / 2);


    this.x = width;
    this.w = 20; 
    this.speed = 5;

  
    this.show = function () {
        fill(255);

        // Top pipe
        rect(this.x, 0, this.w, this.top);

        // Bottom pipe
        rect(this.x, height - this.bottom, this.w, this.bottom);
    };


    this.update = function () {
        this.x -= this.speed;
    };
}