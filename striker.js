class Striker{
    constructor(x, y){
        var options = {
            friction: 1.0,
            restitution: 0.1,
            density:1.0,
            isStatic: true 
        }
        
        this.striker = Bodies.circle(x, y, 20, options) 
        
        this.strikerImage = loadImage("striker.png")
        
        this.radius = 20;

        World.add(world, this.striker);
    }


    display(){

        
        var pos = this.striker.position

        push();
        translate(pos.x, pos.y)
        imageMode(CENTER);
        image(this.strikerImage, 0, 0, 50, 50 )
        pop();
        
    }
}