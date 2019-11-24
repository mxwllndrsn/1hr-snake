//snake.js

window.addEventListener('keypress', keyDown, true);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;

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
    this.segments = 1;

    this.draw = function(){
        clear();
        ctx.fillStyle='black';
        ctx.fillRect(this.x, this.y, this.w, this.h);
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
};

var s = new snake();
s.draw();

function keyDown(e){
    if(e.key=='w'){
        s.setY(-10);
        console.log('w');
    }
    if(e.key=='s'){
        s.setY(10);
        console.log('s');
    }
    if(e.key=='a'){
        s.setX(-10);
        console.log('a');
    }
    if(e.key=='d'){
        s.setX(10);
        console.log('d');
    }
}
