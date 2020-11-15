class Blueb {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display()
    {
      push()
      var pos =this.body.position;
      rectMode(CENTER);

      fill("cyan");

      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  }; 