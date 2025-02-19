function newCircle() {
    let x = random(0, img.width);
    let y = random(0, img.height);
  
    let valid = true;
    for (let i = 0; i < circles.length; i++) {
      let circle = circles[i];
      let d = dist(x, y, circle.x, circle.y);
      if (d - 2 < circle.r) {
        valid = false;
        break;
      }
    }
    if (valid) {
      let index = (int(x) + int(y) * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let c = color(r, g, b);
      return new Circle(x, y, color(c));
    } else {
      return null;
    }
  }