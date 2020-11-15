class Gb {
    constructor(x,y,width,height,color) {
      var options = {
          isStatic: true,
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.color = color
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display()
    {
      push ()
      var pos =this.body.position;
      rectMode(CENTER);

      fill(this.color);

      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  }; 