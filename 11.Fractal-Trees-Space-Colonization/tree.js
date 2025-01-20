class Tree {
    constructor() {
        this.leaves = [];
        this.branches = [];

        for (let i = 0; i < 500; i++) {//less than 200 leaves
            this.leaves.push(new Leaf());
        }

        //new branch from parent, we have 
        let pos = createVector(width / 2, height );
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

    grow = function()
    {
        for (var i = 0; i < this.leaves.length; i++)
        {
            //finding each leaves closest brannch between
            //root n max distance
            var leaf = this.leaves[i];
            var closestBranch = null;
            var record = 1000000000;
            // var closestDir ;

            for ( var j = 0; j < this.branches.length; j++)
            {
                var branch = this.branch[j];
                var d = p5.Vector.dist(leaf.pos, branch.pos);

                if (d < min_dist)
                {
                    //marking leaf once its reached
                    leaf.reached = true;
                    closestBranch = null;
                    break;
                }
                else if (d > max_dist)
                {
                    
                }
                else if (closestBranch == null || d < record)
                {
                        closestBranch = branch;
                    record = d;

                }
                // else if (closestBranch != null)
                // {
                //     //if unable to find the nearest branch , the current
                //     //branch becomes it
                //     closestBranch = branch;
                //     record = d;
                // }
                // else if (d < record)
                // {
                //     closestBranch = branch;
                //     record = d;
                // }

            }
            if (closestBranch != null)
            {
                //want leaf to pull branches towads it
                //once branch reaches leaf , leaf gets deleted
                var newDir = p5.Vector.sub(leaf.pos , closestBranch.pos);
                newDir.normalize();
                // var newBranch();
                closestBranch.dir.add(newDir);
            }

        }

    }
}