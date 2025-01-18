Will draw on canvas a maze using depth first search
The formula i + j * cols works because:

i gives us the column position
j * cols gives us the row position multiplied by total columns
Together they convert 2D grid coordinates (i,j) into a 1D array index

For example in a 3x3 grid:

Cell (1,1) becomes: 1 + (1 * 3) = 4
Cell (2,2) becomes: 2 + (2 * 3) = 8
I like this because I'll use this convert method later on

https://en.wikipedia.org/wiki/Maze_generation_algorithm#Randomized_depth-first_search