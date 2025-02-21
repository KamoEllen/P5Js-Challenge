let url1 = 'https://api.datamuse.com/words?';

function setup() {
   noCanvas();
   let button = select('#submitbutton');
   let input = select('#wordinput');
}
// function draw()
// {
//     background(200,100,230);
// }

function pickWord(letter, word) {
    let url = `${url1}sp=${letter}*&ml=${word}&max=5`;
    loadJSON(url, gotData);
  }

function makeAcrostic()
 {
    resultsDiv.html(''); 
    let word = input.value().toUpperCase();
    console.log(word);

    
}