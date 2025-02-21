let words = {
    Exclamation: ["Wow", "Oh no", "Yay", "Oops", "Hooray"],
    Adverb: ["quickly", "slowly", "happily", "angrily", "quietly"],
    Noun: ["car", "plane", "bike", "rocket", "boat"],
    Adjective: ["shiny", "old", "colorful", "rusty", "sparkling"],
    PluralNoun: ["shoes", "socks", "hats", "gloves", "sunglasses"]
  };
  
  let txt = "_____________! they said ________ as they jumped into their _____________ and flew off with their __________ __________.";
  
  function setup() {
    noCanvas();
  
    let button = createButton('generate madlib');
    button.mousePressed(generate);
    button.style('padding', '10px 20px');
    button.style('font-size', '16px');
    button.style('background-color', '#4CAF50');
    button.style('color', 'white');
    button.style('border', 'none');
    button.style('cursor', 'pointer');
    button.style('margin-bottom', '20px');
  }
  function generate() {
    let madlib = txt.replace("_____________", random(words.Exclamation))
                    .replace("________", random(words.Adverb))
                    .replace("_____________", random(words.Noun))
                    .replace("__________", random(words.Adjective))
                    .replace("__________", random(words.PluralNoun));
  
    createP(madlib).style('font-size', '20px').style('margin-top', '20px');
  }

function draw() {

    background(255, 255,155);
}