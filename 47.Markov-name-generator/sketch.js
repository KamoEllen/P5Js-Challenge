var names;
var order = 7;
var ngrams = {};
var beginings = [];
var button;

function preload() {
  //loading images or files
  names = loadStrings("names.txt");
  console.log(names);
}
function setup() {
  button = createButton("generate");
  button.mousePressed(markovIt);
  noCanvas();
  for (var j = 0; j < names.length; j++) {
    var txt = names[j];

    for (var i = 0; i <= txt.length - order; i++) {
      var gram = txt.substring(i, i + order); //substring :first index included , last excluded

      //keep track of extra list of possible beginings
      if (i == 0) {
        beginings.push(gram);
      }

      if (!ngrams[gram]) {
        ngrams[gram] = [];
      } else {
        ngrams[gram].push(txt.charAt(i + order));
      }
    }
  }
}
function draw() {
  console.log(ngrams);
}

function markovIt() {
  var currentGram = random(beginings);

  var result = currentGram;

  for (var i = 0; i < 20; i++) {
    var possibilities = ngrams[currentGram];

    if (!possibilities) {
      break;
    }
    var next = random(possibilities);
    result += next;
    var len = result.length;
    currentGram = result.substring(len - order, len);
  }

  createP(result);
}
