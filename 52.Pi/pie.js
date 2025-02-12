class Pie{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.r = 30;
        this.digit =floor(random(10));
        this.yspeed = 0;
    }

    show()
    {
       
        fill(200,30,100);
        circle(this.x, this.y , this.r);
        fill(0);
        textSize(32);
        textAlign(CENTER,CENTER);
        text(this.digit,this.x, this.y);
       
        
        
    }

    update()
    {
        //increasing val of y by 1 everytime i update
        this.y = this.y + this.yspeed;
        this.yspeed += 0.02;
    }
}