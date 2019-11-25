// edibles class

function edible(x, y){
    this.pos = new point(x, y);
    this.w = seg_size;
    this.h = seg_size;

    this.draw = function(){
        ctx.fillStyle='black';
        ctx.fillRect(this.pos.getX(), this.pos.getY(), this.w, this.h);
    };
}

function food(){
    this.all = [];
    this.amount = 0;

    this.add = function(){
        var x = this.makePos();
        var y = this.makePos();
        if(!s.inside(x, y)){
            this.all.push(new edible(x, y));
            this.amount++;
        }
    }
    this.update = function(){
        for(var i=0; i<this.amount; i++){
            this.all[i].draw();
        }
    }
    this.makePos = function(){
        return Math.round(getRand(canvas.width)/delta)*delta;
    }
    this.eaten = function(snakePos){
        for(var i=0; i<this.amount; i++){
            console.log('food check');
            var ePos = this.all[i].pos;
            console.log(`${snakePos.getX()}, ${snakePos.getY()}, ${ePos.getX()}, ${ePos.getY()}`);

            if(ePos.getX() == snakePos.getX()
            && ePos.getY() == snakePos.getY()){
                s.add();
                console.log('food eaten');
                this.all.splice(i, 1);
                this.amount--;
                score+=100;
            }
        }
    }
}

function getRand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}