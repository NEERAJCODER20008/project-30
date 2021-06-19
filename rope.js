class Rope{
    constructor(body1,point1){
     
        var options={
            bodyA:body1,
            pointB:point1,
          
        }
        this.rope=Constraint.create(options)
        this.pointB=point1
        World.add(world,this.rope)
    }
    fly(){
        this.rope.bodyA=null
    }
    attach(body){
        this.rope.bodyA=body
    }
    display(){
        if(this.rope.bodyA){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;

        strokeWeight(2);

      
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}
