/*class Rover{
    constructor(x,y){
        var option ={
            restitution: 0.5,
            density: 0.01

        }
        
        this.x=x;
        this.y=y;
        this.width = 30;
        this.height = 50;
        this.image=loadImage("images/rover.png");
        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, option);

        World.add(world, this.body);
        
    } 
    
   
     display(){
        var pos=this.body.position;
        //imageMode(CENTER);
        //image(this.image, position.x, posiiton.y, this.width, this.height);
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        stroke("black");
        strokeWeight(10);
        fill("yellow");
        rectMode(CENTER);
        rect(0, 0, 100, 200);
       // console.log(pos.x+":"+pos.y);
        pop();
        

    }
    
}
*/