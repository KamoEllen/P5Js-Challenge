var root;
function setup() {
    createCanvas(400, 400);
    var a = createVector(width/2, height);
    var b = createVector(width/ 2 , height - 100);
     root = new Branch(a , b );
}

function draw() {
    background(51);
    root.show();
}

// {
//    line(0,0,0,-len);
//    translate(0,-len);
  
//     if (len > 4) //base case 
//     {
//         push(); //save current state
//         rotate(angle);
//         branch(len * 0.67); 
//         pop(); //restore 

//         push(); //save again for next branch
//         rotate(-angle);
//         branch(len * 0.67);
//         pop(); //restore
//     }

// } 