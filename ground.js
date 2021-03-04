class ground {

constructor(){

    var ground_option ={
isStatic : true

    }
this.body=Bodies.rectangle(200,370,400,20,ground_option)

this.width=400;
this.height=20;

World.add(world,this.body);

}

display(){


var pos=this.body.position

rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);

}

}