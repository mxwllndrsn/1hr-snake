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

// game objects
var q = new comq();
var s = new snake();
var f = new food();

// testing
var a = new autosnake();
a.init();

// run
var speed = 250;
setInterval(function(){
    if(s.isAlive()){
        a.control(q.lastCom());
        s.update();
        f.update();
        scored();
        // diagnostics
        // console.log(q.q);
    } else {
        console.log('dead');
    }
    //console.log(s.stats());
}, speed);


// controller
window.addEventListener('keypress', keyDown, true);

function keyDown(e){
    if(e.key=='w'){
        if(q.lastCom()!='s'){
            q.addCom('w');
        } else badDir();
        console.log('w');
    }
    if(e.key=='s'){
        if(q.lastCom()!='w'){
            q.addCom('s');            
        } else badDir();
        console.log('s');
    }
    if(e.key=='a'){
        if(q.lastCom()!='d'){
            q.addCom('a');
        } else badDir();
        console.log('a');
    }
    if(e.key=='d'){
        if(q.lastCom()!='a'){
            q.addCom('d');
        } else badDir();
        console.log('d');
    }
    if(e.key==' '){
        f.add();
        console.log('space');
    }
}

// a command queue providing 2 com buffer
// used to solve command delay/skip issue 
function comq(){
    // default non-empty w/ s direction
    this.q = ['s'];
    this.last = this.q[0];

    this.addCom = function(dir){
        if(!this.full()){
            this.q.push(dir);
        } else {
            console.log("com queue full");
        }
    }
    this.readCom = function(){
        if(this.notEmpty()){
            this.last = this.q[0];
            return this.q.shift();
        } else {
            return this.last;
        }
    }
    this.notEmpty = function(){
        return this.q.length;
    }
    this.lastCom = function(){
        return this.last;
    }
    this.full = function(){
        return (this.q.length>2);
    }
}


// declare bad directional command
function badDir(){
    console.log("invalid direction");
}

