// var root;
var tree = [];
function setup() {
    createCanvas(400, 400);
    var a = createVector(width/2, height);
    var b = createVector(width/ 2 , height - 100);
     root = new Branch(a , b );
     tree[0] = root;
}

function draw() {
    background(51);
    root.show();

    for (var i = 0 ; i < tree.length; i++)
    {
        tree[i].show();
    }
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