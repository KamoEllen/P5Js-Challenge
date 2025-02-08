let num = "11111111";
function setup() {
    createCanvas(400, 400);
    binaryToDecimal(num);
  }
  
  function draw() {
    // background(200, 200, 30); //yellow 
  }
  function binaryToDecimal(val)
  {
    let sum = 0;
    for (let i =0; i < val.length; i++)
    {
        let bit = val.charAt(val.length-i-1);
        sum += parseInt(bit) * pow(2, i);
    }
    console.log(sum);
  }