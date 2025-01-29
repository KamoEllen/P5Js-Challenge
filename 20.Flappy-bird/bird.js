function Bird() {
    this.y = height / 2;
    this.x = 65;

    this.gravity = 0.6; 
    this.velocity = 0;
    this.lift = -10; 

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 26, 26);
    }

    this.up = function() {
        this.velocity += this.lift;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        // Bottom of canvas
        if (this.y > height) { // bird hits bottom canvas, does not pass through
            this.y = height;
            this.velocity = 0;
        }
        // Top of canvas
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}