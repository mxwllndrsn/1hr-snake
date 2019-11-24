// snake objects


// a snake is composed of segments
function seg(){
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.w = 10;
    this.h = 10;
    this.dir = 's';

    this.update = function(){
        if(this.dir=='w'){
            this.setY(-10);
        }
        if(this.dir=='s'){
            this.setY(10);
        }
        if(this.dir=='a'){
            this.setX(-10);
        }
        if(this.dir=='d'){
            this.setX(10);
        }
    }
    this.setX = function(x){
        this.x += x;
    };
    this.setY = function(y){
        this.y += y;
    };
    this.getX = function(){
        return this.x;
    };
    this.getY = function(){
        return this.y;
    }

}


// but behaves as a whole
function snake(){
    this.segments = [new seg()];
    this.head = this.segments[0];
    this.alive = true;
    this.dir = 's';

    this.update = function(){
        clear();
        this.checkPos();
        for(var i=0; i<this.segments.length; i++){
            console.log(this.segments[i]);
            this.segments[i].update();
            this.draw(this.segments[i]);
        }
    }

    this.draw = function(seg){
        ctx.fillStyle='black';
        ctx.fillRect(seg.x, seg.y, seg.w, seg.h);
        console.log('drawing');
    };


    this.checkPos = function(){
        if(this.head.getX()==0){
            this.die();
        }
        if(this.head.getX()==canvas.width){
            this.die();
        }
        if(this.head.getY()==0){
            this.die();
        }
        if(this.head.getY()==canvas.height){
            this.die();
        }
    }
    this.die = function(){
        this.alive = false;
        clear();
    }
    this.isAlive = function(){
        return this.alive;
    }
    this.add = function(){
        this.segments[this.segments.length++] = new seg();
    }
    this.setDir = function(dir){
        this.dir = dir;
    }
    this.getDir = function(){
        return this.dir;
    }
};
