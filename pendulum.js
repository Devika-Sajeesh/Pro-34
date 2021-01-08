class Pendulum {
    constructor(x,y,color){
        var options = {
            
            restitutions:3,
            friction:0,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity
        }

        this.body = Bodies.rectangle(x,y,20,20,options);
        this.x = x;
        this.y = y;
        this.color = "white";
        World.add(world,this.body);
    }

    display(){

        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //nonStroke();
        stroke(this.color);
        strokeWeight(2);
        fill("black");
        ellipse(0,0,60,60);
        pop();
    }
}