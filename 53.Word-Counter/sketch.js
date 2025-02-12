var txt;
var counts = {};
var keys  = [];

function preload() {
    txt = loadStrings('words.txt'); // del extra space
}

function setup() {
    var allwords = txt.join("\n");
    // /\W+/ == any non-alphanumeric character
    var tokens = allwords.split(/\W+/);
    
   
    tokens = tokens.filter(function(token) {
        return token.length > 0;
    });

    console.log(tokens);

    for (var i = 0; i < tokens.length; i++) {
        var word = tokens[i].toLowerCase();
        // Word will be key and count will be priority

        if (!/\d+/.test(word))
        {
            if (counts[word] === undefined) {
                counts[word] = 1;
                keys.push(word); 
            } else {
                counts[word] = counts[word] + 1;
            }
        }
    }

    noCanvas(); // Fixed typo here
    // keys.sort();
    keys.sort(compare);

    function compare(a,b)
    {
        var countA = counts[a];
        var countB  = counts[b];
        return countB- countA;

    }
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        createDiv(key + " " + counts[key]);
      }
    
}

// function draw() {
//     background(200, 60, 77);
// }