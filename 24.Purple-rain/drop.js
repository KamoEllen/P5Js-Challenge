//rain drop 
//array with many drops
class Drop {
    constructor() {
        this.x = width/2;
        this.y = 0;
        this.yspeed =1;
    }

    fall() {
   y = y + yspeed;
    }

    show() {
     stroke(138,43,226);
     lifeP(this.x,this.y,this.x,this.y+10)
    }
}