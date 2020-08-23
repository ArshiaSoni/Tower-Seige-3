class SlingShot{
    constructor(point1, body2){
        var options = {
            pointA: point1,
            bodyB: body2,
            length: 100,
            stiffness: 0.4
        }

        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
    }

    attach(body2){
        this.body.bodyB = body2;
    }

    fly(){
        this.body.bodyB = null;
    }

    display(){
        if(this.body.bodyB){
            var pointA = this.body.pointA;
            var pointB = this.body.bodyB.position;
            push ();
            stroke (255);
            strokeWeight(4);
            line (pointA.x, pointA.y, pointB.x, pointB.y);
            pop ();
        }
        
    }
}