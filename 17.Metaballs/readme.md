my notes:
Metaballs r are type of visual effect where
circles merge and blend kinda like the previous mitosis project.
Blob class-each blob has a position and speed and radius
if blobs hits canvas it changes direction
the blobs move randomly
the nested loops handles how the blobs combine, draw() , 
sum of each pixel in canvas is initially 0, if we have blob then sum accumulates . Sum calculates distance from pixel to blob.
when 2 blobs r overlapping each otherr the sum of pixel to blob is larger , it will count both blobs
there will be an outline surrounding the overlapping blobs , making it look like they are merging

 
-[site](https://www.gamedev.net/articles/programming/graphics/exploring-metaballs-and-isosurfaces-in-2d-r2556/)