class RobotArm {
    constructor(x, y, numSegs, segLen, angle) {
        this.base = createVector(x, y);
        this.segs = [];
        this.segs[0] = new Segment(x, y, segLen, angle, 0);
        for (let i = 1; i < numSegs; i++) {
            this.addSegment(segLen, 0, i + 1);
        }

        addSegment(len, angle) 
        {
            let c = this.segs[this.segs.length - 1];
            let s = new Segment(0, 0, len, angle, this.segs.length);
            c.parent = s;
            this.segs.push(s);
            s.follow(c.a.x, c.a.y);
            return s;
        }

        show() 
        {
            this.segs.forEach(s => s.show());
        }
    }

}