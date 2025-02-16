let cells = [1,0,0,1,0,1,0,1,1,0,1,0,1,1,0];
let w = 40;
function setup() {
    createCanvas(600, 600);
}
function draw()
{
    background(222,234,99);

    for (let i = 0; i <cells.length; i++)
    {
        let x = i *w;
        stroke(0);
        //1 cell is -purple
        //0 cell is - pink
        fill(255 -cells[i] * 88,11,220,90);
        square(x,0,w);
    }
}