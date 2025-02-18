var nn;

let training_data = [{
    inputs: [0, 0],
    outputs: [0]
  },
  {
    inputs: [0, 1],
    outputs: [1]
  },
  {
    inputs: [1, 0],
    outputs: [1]
  },
  {
    inputs: [1, 1],
    outputs: [0]
  }
];

function setup() {
    createCanvas(640, 360);
    nn = new NeuralNetwork(2,2,1);
  }
  
  function draw() {
    background(99,66,44); //brown

for (var i = 0; i < 1000; i++)
{
     let data = random(training_data);
    nn.train(data.inputs,data.outputs); //this input should produce that output

}
   
let resolution = 10;
  let cols = width / resolution;
  let rows = height / resolution;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) 
    {
        fill(random(255));
        rect(i * resolution , j * resolution, resolution);
    }
}

  }