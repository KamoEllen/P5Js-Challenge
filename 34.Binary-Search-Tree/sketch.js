var tree;

function setup() {
    createCanvas(200, 200);
    tree = new Tree();
    var n = new Node(5);
    tree.addNode(n);
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