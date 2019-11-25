// game components


// canvas elements
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = 500;//document.body.clientHeight;
canvas.width = 500;//document.body.clientWidth;

function clear(){
    canvas.width = canvas.width;
}

//scoreboard
var score = 0;
function scored(){
    document.getElementById("score").innerHTML=score;
}

// snake
var s = new snake();
var f = new food();

// run
var speed = 500;
setInterval(function(){
    if(s.isAlive()){
        s.update();
        f.update();
        scored();
    } else {
        console.log('dead');
    }
    //console.log(s.stats());
}, speed);


// controller
window.addEventListener('keypress', keyDown, true);

function keyDown(e){
    if(e.key=='w'){
        if(s.getHeading()!='s'){
            s.setHeading('w');
        }
        console.log('w');
    }
    if(e.key=='s'){
        if(s.getHeading()!='w'){
            s.setHeading('s');            
        }
        console.log('s');
    }
    if(e.key=='a'){
        if(s.getHeading()!='d'){
            s.setHeading('a');
        }
        console.log('a');
    }
    if(e.key=='d'){
        if(s.getHeading()!='a'){
            s.setHeading('d');
        }
        console.log('d');
    }
    if(e.key==' '){
        f.add();
        console.log('space');
    }
}
