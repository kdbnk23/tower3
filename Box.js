class Box {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
    }
    
  }
  display()
    push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
     
     score()
      if (this.visibility<0&&this.visibility>-105){
        score++
      }
    
  
    