//snake.js

window.addEventListener('keypress', keyDown, true);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;

var x = canvas.width/2;
var y = canvas.height/2;

ctx.fillStyle='black';
ctx.fillRect(x, y, 10, 10);

function keyDown(e){
    if(e.key=='w'){
        clearCanvas();
        y-=10;
        ctx.fillRect(x, y, 10, 10);
        console.log('s');
    }
    if(e.key=='s'){
        clearCanvas();
        y+=10;
        ctx.fillRect(x, y, 10, 10);
        console.log('w');
    }
    if(e.key=='a'){
        clearCanvas();
        x-=10;
        ctx.fillRect(x, y, 10, 10);
        console.log('a');
    }
    if(e.key=='d'){
        clearCanvas();
        x+=10;
        ctx.fillRect(x, y, 10, 10);
        console.log('d');
    }
}

function clearCanvas(){
    canvas.width = canvas.width;
}

