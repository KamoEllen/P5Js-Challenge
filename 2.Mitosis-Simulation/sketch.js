var cells=[];
function setup() {
    createCanvas(600, 400);
    //Cell -name of constructor function tht makes cell obj
    //cell - individual var holdin 1 obj 
    cells.push(new Cell());
    cells.push(new Cell());
}

function draw() {
    background(51); 
    for (var i = 0; i < cells.length; i++)
    {
      cells[i].move();
      cells[i].show();   
    }
   
}
//did user click mouse  & did they click on cell obj
function mousePressed() //global function determine if user clicked
{
    for (var i =cells.length -1; i >= 0;i--)
    {
        if (cells[i].clicked(mouseX,mouseY))
        {
            cells.push(cells[i].mitosis());
            cells.push(cells[i].mitosis());
            cells.splice(i,1);
           // console.log("CLicked");
        }
    }
}


