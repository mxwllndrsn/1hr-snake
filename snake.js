// snake class

// some constants
const delta = 10;
const seg_size = delta;
var ox = canvas.width/2;
var oy = canvas.width/2;
const origin = new point(ox, oy);

// a game field is composed of points
function point(x, y){
    this.x = x;
    this.y = y;

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

// a snake is composed of segments
function seg(x, y, dir){
    this.pos = new point(x, y);
    this.w = seg_size;
    this.h = seg_size;
    this.dir = dir;

    this.update = function(){
        if(this.dir=='w'){
            this.pos.setY(-delta);
        }
        if(this.dir=='s'){
            this.pos.setY(delta);
        }
        if(this.dir=='a'){
            this.pos.setX(-delta);
        }
        if(this.dir=='d'){
            this.pos.setX(delta);
        }
    }

    this.draw = function(){
        ctx.fillRect(this.pos.getX(), this.pos.getY(), this.w, this.h);
    };

}


// but behaves as a whole
function snake(){
    this.alive = true;
    this.heading = q.readCom();
    this.segments = [new seg(origin.getX(), origin.getY(), this.heading)];
    this.head = this.segments[0];
    this.length = 1;

    this.update = function(){
        clear();
        // get heading
        this.setHeading(q.readCom());
        // did we eat food?
        f.eaten(this.head.pos);
        // update position and draw
        for(var i=0; i<this.length; i++){
            this.segments[i].update();
            this.segments[i].draw();
        }
        // pass direction
        for(var i=this.length-1; i>0; i--){
            var curr = this.segments[i];
            var prev = this.segments[i-1];
            curr.dir = prev.dir;
        }
    }

    // check for out of bounds and self-collision, die if true
    this.checkPos = function(){
        this.checkBounds();
        this.checkSelf();
    }
    this.checkBounds = function(){
        if(this.head.pos.getX()==0 || this.head.pos.getX()==canvas.width){
            this.die();
        }
        if(this.head.pos.getY()==0 || this.head.pos.getY()==canvas.height){
            this.die();
        }
    }
    this.checkSelf = function(){
        for(var i=1; i<this.length; i++){
            if(this.head.pos.getY()==this.segments[i].pos.getY()
            && this.head.pos.getX()==this.segments[i].pos.getX()){
                this.die();
            }
        }
    }

    this.setHeading = function(dir){
        // update head segment
        this.head.dir = dir;
        // update snake heading
        this.heading = dir;
    }
    this.getHeading = function(){
        return this.heading;
    }

    this.isAlive = function(){
        this.checkPos();
        return this.alive;
    }
    this.die = function(){
        this.alive = false;
        clear();
    }

    this.add = function(){
        var prev = this.segments[this.length-1];
        if(prev.dir=='s'){
            var y=prev.pos.getY()-delta;
            var x=prev.pos.getX();
        }
        if(prev.dir=='w'){
            var y=prev.pos.getY()+delta;
            var x=prev.pos.getX();
        }
        if(prev.dir=='a'){
            var x=prev.pos.getX()+delta;
            var y=prev.pos.getY();
        }
        if(prev.dir=='d'){
            var x=prev.pos.getX()-delta;
            var y=prev.pos.getY();
        }
        this.segments.push(new seg(x, y, prev.dir));
        this.length++;
    }

    this.stats = function(){
        return `Length: ${this.length}, Heading: ${this.getHeading()}, Position: ${this.head.pos.getX()}, ${this.head.pos.getY()}, Alive: ${this.alive}`;
    }

    this.inside = function(x, y){
        for(var i=0; i<this.length; i++){
            if(x==this.segments[i].pos.getY()
            && y==this.segments[i].pos.getX()){
                return true;
            }
        }
    }
};
