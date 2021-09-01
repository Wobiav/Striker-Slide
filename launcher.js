class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        //this.bodyA = bodyA;
        this.pointB = pointB;

        this.launcher = Constraint.create(options);
        World.add(world, this.launcher)
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        if(this.launcher.bodyA){
         var posA = this.launcher.bodyA.position
         var posB = this.pointB

        push()
        strokeWeight(4);
        stroke("lightblue")
        line(posA.x, posA.y, posB.x, posB.y)
        pop();
        }     
        
    }
}