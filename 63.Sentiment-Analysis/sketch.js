let afinn;

function preload() {
    afinn = loadJSON('afinn111-edited.json');
}

function setup() {
  noCanvas();
  console.log(afinn);

  let txt = select('#txt');
  txt.input(typing);

  function typing() {
    let textinput = txt.value();
    let words = textinput.split(/\W/);
    console.log(words);
    let scoredwords = [];
    let totalScore = 0;
    for (var i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase();
      if (afinn.hasOwnProperty(word)) {
        var score = afinn[word];
        console.log(word, score);
        totalScore += Number(score);
        scoredwords.push(word + ': ' + score + ' ');
      }
    }
    let scorePar = select('#scoreP');
    scorePar.html('score: ' + totalScore);
    let comp = select('#comparativeP');
    comp.html('comparative: ' + totalScore / words.length);
    let wordlist = select('#wordlistP');
    wordlist.html(scoredwords);
  }
}