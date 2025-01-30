var textfield;
var output;
var submit;
var fileContents = "No file loaded yet.";

function setup() {
  noCanvas();
  textfield = select('#input');
  output = select('#output');
  submit = select('#submit');
  loadStrings('data.txt', fileLoaded);
  submit.mousePressed(newText);
}

function fileLoaded(data) {
  fileContents = data.join('\n');
  console.log('File loaded:', fileContents);
}

function newText() {
  var s = textfield.value();
  var words = s.split(/\W+/);
  console.log(words);
  var displayText = "You entered: " + s + "<br><br>File contents:<br>" + fileContents;
  var newParagraph = createP(displayText);
  newParagraph.parent(output);
  textfield.value('');
}