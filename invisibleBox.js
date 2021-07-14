class InvisibleBox{
    constructor(x,y){
        
        this.x=x;
        this.y=y;
        this.width = 20;
        this.height=20;

        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height,{isStatic:true});

        World.add(world, this.body);
        
         
    }
   
    display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("purple")
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    
}