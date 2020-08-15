class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.radius = r;
      this.body = Bodies.circle(x,y,this.radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      noStroke();
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };