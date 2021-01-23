class paper{
constructor(x,y,radius){
    var options = {
 isStatic:false,
 restituation:0.2,
 friction:0.3,
 density:1.2

    }
    this.r = radius
    this.body = Bodies.circle(x,y,radius,options)
    World.add(world,this.body)
    this.image= loadImage("paper.png")
}
display()
{
    fill("yellow");
    ellipseMode(RADIUS);
   image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
}


}