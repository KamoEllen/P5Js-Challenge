// alternating series where the terms are reciprocals of odd integers, with signs alternating between positive and negative.

let pi = 1;
let iteration = 0;

function setup() {
    createCanvas(600, 600);
   
   
        createDiv(pi);
    }



function draw()
{
    background(22,88,66);
    for (let i = 0;i < 10; i++)
        {
            //alt seq odd nums
            let den = iteration * 2 + 3;// denominato
            if (iteration % 2 == 0)
            {
                pi -= (1/den);
    
            }
            else{
                pi +=  (1/den);
            }
    
            pi *= 4;
            div.html(pi);
            iteration++;
        }
}