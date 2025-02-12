var rules = {
    "S": [
      ["NP", "VP"],
      ["Interj", "NP", "VP"]
    ],
    "NP": [
      ["Det", "N"],
      ["Det", "N", "that", "VP"],
      ["Det", "Adj", "N"]
    ],
    "VP": [
      ["Vtrans", "NP"],
      ["Vintr"]
    ],
    "Interj": [
      ["oh"],
      ["my"],
      ["wow"],
      ["darn"]
    ],
    "Det": [
      ["this"],
      ["that"],
      ["the"]
    ],
    "N": [
        ["software engineer"],
        ["developer"],
        ["singer"],
        ["dancer"],
        ["code"],
        ["algorithm"],
        ["music"],
        ["performance"]
    ],
    "Adj": [
        ["creative"],
        ["efficient"],
        ["talented"],
        ["passionate"],
        ["innovative"],
        ["dynamic"]
    ],
    "Vtrans": [
        ["writes"],
        ["debugs"],
        ["designs"],
        ["sings"],
        ["dances"],
        ["composes"]
    ],
    "Vintr": [
        ["solves problems"],
        ["performs"],
        ["creates"],
        ["collaborates"]
    
    ],
    "Ving": [
        ["coding"],
        ["singing"],
        ["dancing"],
        ["debugging"],
        ["performing"]
    ]
  };

function expand(start, expansion) {
    if (rules[start]) {
      var pick = random(rules[start]);
      console.log(pick);
      for (var i = 0; i < pick.length; i++) {
        expand(pick[i], expansion);
      }
    } else {
      expansion.push(start);
    }
    return expansion.join(" ");
  }

  var button;

function setup()
{
    // createCanvas(400,400);
    noCanvas();
    button = createButton('generate')
    button.mousePressed(cfg);

}

function cfg()
{
      
   for (var i = 0; i < 10; i++)
    {
     var start = "S";
     var expansion = [];
    
     var  result =  expand(start, expansion);
     console.log(result);
     createP(result);
    }

}
