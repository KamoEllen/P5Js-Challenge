//rain drop 
//array with many drops
class Drop {
    constructor() {
        this.x = random(width);
        this.y = random(-500,500);
        this.yspeed = random(4,10);
        this.len = random(10,20);
    }

    fall() {
   this.y = this.y + this.yspeed; 
   this.yspeed = this.yspeed + 0.2;

   if (this.y > height )
   {
    this.y = random(-200,-100);
    this.yspeed = random(4,10);
   }
    }

    show() {
     stroke(138,43,226);
     line(this.x, this.y, this.x, this.y + this.len);
    }
}