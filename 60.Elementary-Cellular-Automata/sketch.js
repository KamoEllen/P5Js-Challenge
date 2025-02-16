let cells = []; //1,0,0,1,0,1,0,1,1,0,1,0,1,1,0
let ruleset = [1,0,0,1,0,1,0,1,1,0,1,0,1,1,0];
let w = 10;
let y = 0;
function setup() {
    createCanvas(600,600);

    let  total = width/w;
    for (let i =0; i < total; i++)
    {
        // cells[i] = floor(random(2));
        cells[i]=0;
    }
    cells[floor(total/2)]   = 1;
    background(222,234,99);
  
}
function draw()
{
    
    for (let i = 0; i < cells.length;i++)
    {
        let x = i * w;
        // stroke(0);
        noStroke();
        fill(255 - cells[i] * 255);
        square(x,y,w);
    }
    y += w;
   


    let nextCells = [];
    nextCells[0] = cells[0];
    nextCells[cells.length-1] =cells[cells.length-1];

    for (let i=1; i < cells.length-1;i++)
    {
        let left = cells[i-1];
        let right =  cells[i+1];
        let state = cells[i];
        let newState = calculateState(left,state,right);
        nextCells[i] = newState;
    }
    cells = nextCells;

    function calculateState(a,b,c)
    {
        
        let neighborhood = '' + a + b + c;
        let value = 7-parseInt(neighborhood,2);
        return ruleset[value];
        // if (a == 1 && b ==1 && c == 1) return 1;
        // if (a == 1 && b ==1 && c == 0) return 0;
        // if (a == 1 && b ==0 && c == 1) return 1;
        // if (a == 1 && b ==0 && c == 0) return 1;
        // if (a == 0 && b ==1 && c == 1) return 0;
        // if (a == 0 && b ==1 && c == 0) return 1;
        // if (a == 0 && b ==0 && c == 1) return 1;
        // if (a == 0 && b ==0 && c == 0) return 0;
    }
}