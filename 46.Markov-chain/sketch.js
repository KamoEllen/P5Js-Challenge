var txt = "The unicorn is a legendary creature that has been described since antiquity as a beast with a large, pointed, spiraling horn projecting from its forehead. The unicorn was depicted in ancient seals of the Indus Valley Civilization and was mentioned by the ancient Greeks in accounts of natural history by various writers, including Ctesias, Strabo, Pliny the Younger, and Aelian.[1] The Bible also describes an animal, the re'em, which some translations have erroneously rendered with the word unicorn.[1] In European folklore, the unicorn is often depicted as a white horse-like or goat-like animal with a long horn and cloven hooves (sometimes a goat's beard). In the Middle Ages and Renaissance, it was commonly described as an extremely wild woodland creature, a symbol of purity and grace, which could only be captured by a virgin. In the encyclopedias its horn was said to have the power to render poisoned water potable and to heal sickness. In medieval and Renaissance times, the tusk of the narwhal was sometimes sold as unicorn horn.";
var order = 3;//tri
var ngrams =  {};
var button;

function setup() {
    button = createButton("generate");
    button.mousePressed(markovIt);
     noCanvas();
    // createCanvas(400, 400, WEBGL);

    //loop text
    for (var i = 0;i <= txt.length - order ; i++)
    {
        var gram = txt.substring(i,i+ 3); //substring :first index included , last excluded
        if (!ngrams[gram])
        {
            ngrams[gram] = [];
            // ngrams[gram].push(txt.charAt(i+3));
            //if  unique , list it and the next three letters

        }
        else
        {
            // ngrams[gram]++
            ngrams[gram].push(txt.charAt(i+3));
            
        }
        // ngrams.push(gram);
    }
  }
  function draw() {
    // background(145,145,145);
    
    console.log(ngrams);
  }

  function markovIt()
  {

    var currentGram = txt.substring(0, order);

    var result= currentGram;

    for (var i =0; i < 10; i++)
    {
    //rndom next poss characters
        var possibilities = ngrams[currentGram];
        var next = random(possibilities);
        result += next;
        var len =result.length
        currentGram = result.substring(len-3, len);
    }
    

    createP(result);
  }