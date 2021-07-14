class AlienClass3{
    constructor(x,y){
        
        this.x=x;
        this.y=y;
        this.width = 250;
        this.height= 250;
        this.image=loadImage("images/alienClass3.png");
        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height,{isStatic:true});

        World.add(world, this.body);
        
         
    }
   
    display(){
      var pos=this.body.position;
      //console.log("alien");
      push();
      translate(pos.x,pos.y);
      fill("white")
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    
}