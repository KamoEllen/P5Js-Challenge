var rules = {
  "S": [
    ["The", "N", "V"]
  ],
  "N": [
    ["cat"],
    ["dog"]
  ],
  "V": [
    ["meows"],
    ["barks"]
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

function setup()
{
    // createCanvas(400,400);
    noCanvas();
  
   for (var i = 0; i < 10; i++)
   {
    var start = "S";
    var expansion = [];
   
    var  result =  expand(start, expansion);
    console.log(result);
    createP(result);
   }
}
// function draw()
// {
//  background(20,40,66);
// }