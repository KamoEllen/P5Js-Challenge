class Segment {
    constructor(point, len, angle) {
        //point on 2 parts of segment, lenght/height of segment, angle of  rotation relative to x axis
        this.len = len;
    this.angle = angle;
    this.point = point;
    }
    show() {
        stroke(255);
        strokeWeight(4);
        line(this.len,this.point,this.angle);
      }

}