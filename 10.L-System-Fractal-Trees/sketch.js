//l-system
//recursive way of generating sentences over and over again using string replacement
//rule : v
// 0 : A
// 1 : AB
// 2 : AB B
// 3 : AB A AB
var axiom = "F";
// var axiom = "A";
var sentence = axiom;
var rules = [];
var len = 100;

rules[0] =
{
    a : "F",
    b : "FF+[+F-F-F]-[-F+F+F]"
}
// rules[0] =
// {
//     a : "A",
//     b : "ABC"
// }
// rules[1] =
// {
//     a : "B",
//     b : "A"
// }

function generate()
{
    var nextSentence = "";
    for (var i = 0; i < sentence.length;i++)
    {
        var current = sentence.charAt(i);
        var found = false;
        for (var j = 0; j < rules.length;j++)
        {
            if (current == rules[j].a)
                {
                    found = true;
                    nextSentence += rules[j].b;
                    break;
                }
        }
       if (!found)
       {
        nextSentence += current;
       }
    }
    sentence = nextSentence;
    createP(sentence);
    turtle();
}

function turtle()
{
    background(51);
    translate(width/2, height);
    stroke(255);
    //turtle graphics engine 
    for (var i = 0; i < sentence.length; i++)
    {
        var current =sentence.charAt(i);

        if (current == "F")
        {
            line(0,0,0,-len);
            translate(0,-len);
        }
        else if (current == "+")
        {
            rotate(PI/6);
        }
        else if (current == "-")
        {
            rotate(-PI/6);
        }
        else if (current == "[")
        {
            push();
        }
        else if (current == "]")
        {
            pop();
        }
    }

}
function setup() {
    createCanvas(400, 400);
    // noCanvas();
    background(15);
    createP(axiom);
    turtle();
    var button = createButton("generate");
    button.mousePressed(generate);
}

// function draw() {
//     background(51);
// }
