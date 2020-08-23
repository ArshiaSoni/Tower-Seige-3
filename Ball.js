class Ball{
    constructor(){
        var options = {
            density: 1
        }
        this.body = Bodies.circle(250, 250, 20, options);
        this.radius = 20;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill ("yellow");
        circle (pos.x, pos.y, 2 * this.radius);
    }
}