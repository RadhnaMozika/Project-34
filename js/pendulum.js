class Pendulum {
    constructor(x, y, color){
        var options={
            restitution : 1, 
            friction : 0, 
            frictionA : 0,
            slop : 1, 
            inertia : Infinity, 
            density : 0.0005
        }
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.x = x;
        this.y = y;
        this.color = color;
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);

        strokeWeight(3)
        stroke(this.color);
        fill(0)
        ellipseMode(RADIUS);
        ellipse(0, 0, 40, 40);

        pop();
    }
}