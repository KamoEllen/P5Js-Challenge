class RobotArm {
    constructor(x, y, numSegs, segLen, angle) {
        this.base = createVector(x, y);
        this.segs = [];
        this.segs[0] = new Segment(x, y, segLen, angle, 0);
        for (let i = 1; i < numSegs; i++) {
            this.addSegment(segLen, 0, i + 1);
        }

        show() 
        {
            
        }
    }

}