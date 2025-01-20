//continue until you reach (*1)
//4! = 4 * 3 * 2 * 1
//5!= 5 * 4 * 3 * 2 * 1
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);

    //trunk of tree
    // var len = 100; //length
    stroke(255); //white stoke
    translate(200,height);
    // line(200, height , 200, height - len);
    branch(100);
}
//doesnt work without 'function'
// branch(len)
// {
//     line(200, height , 200, height - len);

// }

function branch(len)
{
    // line(200, height , 200, height - len);
    line(0,0,0,-len);
    //now wanna rotate n draw branch to another direction
    translate(0,-len);
    //without 'translate(0,-len);' it will start from origin
    //want it to start at top of last branch
    rotate(PI/4);
    branch(len * 0.67);
    // line(0,0,0,-len*0.67);

} //wanna draw branches from origin , but origin is
//top left corner , so imma switch that n make the origin
//center bottom , gonna use translate