let num = "00101111";
let byte = [];

function setup() {
    createCanvas(400, 400);
    binaryToDecimal(num);


    let w = width/8;
    for (let i =  0; i < 8; i++)
    {
        // let bit = new Bit(i*w , 50,w);
        byte[i] = new Bit(w/2+i * w , 50,w-4);
        byte[i].setState(num.charAt(i));

    }
  }
  
  function draw() {
    background(200, 200, 30); //yellow 
    for (let i =  0; i < 8; i++)
        { 
            byte[i].show();
        }
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