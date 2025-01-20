function Tree()
{
    this.leaves = [];

    for (var i = 0; i < 200; i++)
    {//less than 200 leaves
        this.leaves.push(new Leaf());
    }

    this.show = function()
    {
        for (var i = 0; i < this.leaves.length; i++)
        {
           this.leaves[i].show();
        }
    }
}