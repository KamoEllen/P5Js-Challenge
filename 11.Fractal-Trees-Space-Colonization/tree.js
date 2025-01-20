class Tree {
    constructor() {
        this.leaves = [];
        this.branches = [];

        for (let i = 0; i < 200; i++) {//less than 200 leaves
            this.leaves.push(new Leaf());
        }

        //new branch from parent, we have 
        let pos = createVector(width / 2, height / 2);
        let dir = createVector(0, -1);
        let root = new Branch(null, pos, dir);

        this.branches.push(root);

        let current = root;
        let found = false;

        while (!found) {
            for (let i = 0; i < this.leaves.length; i++) {
                //chcking distance from root n leave position
                let d = p5.Vector.dist(current.pos, this.leaves[i].pos);
                if (d < max_dist) {
                    //distance is close can continue
                    found = true;
                }
            }

            if (!found) {
                //make new branch using root branch
                let branch = current.next();
                current = branch;
                this.branches.push(current);
            }
        }
    }

    //branch -> new branch starts at previous branch end
    //form angles -> towards leaves

    show() {
        for (let i = 0; i < this.leaves.length; i++) {
            this.leaves[i].show();
        }
        for (var i = 0; i < this.branches.length; i++)
        {
            this.branches[i].show();
        }
    }
}