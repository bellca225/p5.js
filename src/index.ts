import * as p5 from "p5";

export const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(220);
    p.ellipse(120, 50, 90, 80);
  };
};

export const myp5 = new p5(sketch, document.body);
