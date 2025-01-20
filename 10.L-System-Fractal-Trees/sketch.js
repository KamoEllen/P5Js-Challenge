//l-system
//recursive way of generating sentences over and over again using string replacement
//rule : v
// 0 : A
// 1 : AB
// 2 : AB B
// 3 : AB A AB
var axiom = "A";
var sentence = axiom;
var rules = [];

rules[0] =
{
    a : "A",
    b : "ABC"
}
rules[1] =
{
    a : "B",
    b : "A"
}

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
}
function setup() {
    // createCanvas(400, 400);
    noCanvas();
    createP(axiom);
    var button = createButton("generate");
    button.mousePressed(generate);
}

// function draw() {
//     background(51);
// }
