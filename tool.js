class Tool{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.image=loadImage("images/tool.png");
        this.body=Bodies.circle(this.x, this.y, this.r, options);

        World.add(world,this.body);
        
        
    }
   
     display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("pink")
        ellipseMode(CENTER);
        ellipse(0, 0, 10, 10);
        pop();

    }


}

