var textfield;
var output;
var submit;
function setup() {
    // createCanvas(400, 400);
    noCanvas();
    textfield =select('#input');
    output = select('#output');
    submit = select('#submit');
    submit.mousePressed(newText);
  }

  function newText()
{
    var s = textfield.value();

    var words = s.split(/\W+/); //anything thats not from a-z or 0-9
    console.log(words);
    // console.log(s);
    createP(s);
}
  
//   function draw() {
//     background(51);
//   }