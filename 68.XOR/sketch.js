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
  }