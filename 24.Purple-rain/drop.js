//rain drop 
//array with many drops
class Drop {
    constructor() {
        this.x = random(width);
        this.y = random(-500,500);
        // this.yspeed = random(4,10);
        this.z = random(0,20);
        this.len = random(this.z,0,20,10,20); //drop size : long = close , short = far
        this.yspeed = map(this.z,0,20,4,10);
    }

    fall() {
   this.y = this.y + this.yspeed; 
   this.yspeed = this.yspeed + 0.2;

   if (this.y > height )
   {
    this.y = random(-200,-100);
    // this.yspeed = random(4,10);
    //speed is reset using z
    this.yspeed = map(this.z,0,20,4,10);
   }
    }

    show() {
        var thick = map(this.z,0,20,1,3); //20-thicer faster longer , 0- thinner shorter and slower
        strokeWeight(thick);
     stroke(138,43,226);
     line(this.x, this.y, this.x, this.y + this.len);
    }
}