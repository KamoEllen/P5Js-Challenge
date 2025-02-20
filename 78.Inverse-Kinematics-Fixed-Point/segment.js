
class Segment {
    constructor(x, y, len, angle, id) {
        this.a = createVector(x, y);
        this.len = len;
        this.angle = angle;
        this.id = id;
        this.parent = null;
        this.reCalculate();
    }

    update()
    {
        
    }

    show()
    {

    }
}