class Pinkb {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.3,
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

      fill("pink");

      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  }; 