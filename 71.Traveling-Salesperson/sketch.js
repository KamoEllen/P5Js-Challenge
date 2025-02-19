function draw() {
    background(188, 199, 234); // soft blue
    fill(255);
    for (var i = 0; i < cities.length; i++) {
      ellipse(cities[i].x, cities[i].y, 8, 8);
    }
  
    stroke(255);
    strokeWeight(1);
    noFill();
    beginShape();
    for (var i = 0; i < cities.length; i++) {
      vertex(cities[i].x, cities[i].y);
    }
    endShape();
  
    stroke(255, 0, 255);
    strokeWeight(4);
    noFill();
    beginShape();
    for (var i = 0; i < cities.length; i++) {
      vertex(bestEver[i].x, bestEver[i].y);
    }
    endShape();
  }