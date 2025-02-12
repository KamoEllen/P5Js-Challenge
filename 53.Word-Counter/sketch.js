var txt;
var counts = {};

function preload() {
    txt = loadStrings('words.txt'); // del extra space
}

function setup() {
    var allwords = txt.join("\n");
    // /\W+/ == any non-alphanumeric character
    var tokens = allwords.split(/\W+/);
    


    console.log(tokens);

    for (var i = 0; i < tokens.length; i++) {
        var word = tokens[i]; // Check each word
        // Word will be key and count will be priority

        if (counts[word] === undefined) {
            counts[word] = 1;
        } else {
            counts[word] = counts[word] + 1;
        }
    }

    noCanvas(); // Fixed typo here
    
}

// function draw() {
//     background(200, 60, 77);
// }