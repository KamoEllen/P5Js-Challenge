var tree;

function setup() {
    createCanvas(200, 200);
    tree = new Tree();
    tree.addValue();
    // tree.addNode(new Node(5));
}

class Tree {
    constructor() {
        this.root = null; //with reference to root, can find any node
    }

    addNode(n) {
        if (this.root === null) {
            this.root = n;
        }
    }
}

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function draw() {
    background(0);
}