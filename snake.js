//snake.js

window.addEventListener('keypress', keyDown, true);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = 500;//document.body.clientHeight;
canvas.width = 500;//document.body.clientWidth;

var x = canvas.width/2;
var y = canvas.height/2;


function clear(){
    canvas.width = canvas.width;
}

function snake(){
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.w = 10;
    this.h = 10;
    this.seg = 2;
    this.dir = 's';
    this.alive = true;

    this.update = function(){
        this.checkPos();

        if(this.dir=='w'){
            s.setY(-10);
        }
        if(this.dir=='s'){
            s.setY(10);
        }
        if(this.dir=='a'){
            s.setX(-10);
        }
        if(this.dir=='d'){
            s.setX(10);
        }
    }

    this.draw = function(){
        clear();
        for(var i=0; i<this.seg; i++){
            var inc = i*10;
            ctx.fillStyle='black';
            ctx.fillRect(this.x+inc, this.y+inc, this.w, this.h);
        }
        console.log('drawing');
    };
    this.setX = function(x){
        this.x += x;
        this.draw();
    };
    this.setY = function(y){
        this.y += y;
        this.draw();
    };
    this.getX = function(){
        return this.x;
    };
    this.getY = function(){
        return this.y;
    }
    this.setDir = function(dir){
        this.dir = dir;
    }
    this.getDir = function(){
        return this.dir;
    }

    this.checkPos = function(){
        if(this.getX()==0){
            this.die();
        }
        if(this.getX()==canvas.width){
            this.die();
        }
        if(this.getY()==0){
            this.die();
        }
        if(this.getY()==canvas.height){
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
};

var s = new snake();

function keyDown(e){
    if(e.key=='w'){
        s.setDir('w');
        console.log('w');
    }
    if(e.key=='s'){
        s.setDir('s');
        console.log('s');
    }
    if(e.key=='a'){
        s.setDir('a');
        console.log('a');
    }
    if(e.key=='d'){
        s.setDir('d');
        console.log('d');
    }
    if(e.key==' '){
        s.add();
        console.log('space');
    }
}

// run
setInterval(function(){
    if(s.isAlive()){
        s.update();
        s.draw();
    } else {
        console.log('dead');
    }
 }, 500);

