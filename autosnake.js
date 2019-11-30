// autosnake
// testing conditions

function autosnake(){
    this.iteration=0;

    // initialize test conditions
    // snake = length 20
    // food objects = 20
    this.init = function(){
        for(var i=0; i<20; i++){
            s.add();
            f.add();
        }
    }
    // update direction every 20 iterations
    // go in a circle(square) w -> a -> s -> d
    this.control = function(dir){
        if(this.iteration==20) {
            if(dir=='w'){
                q.addCom('a');
            }
            if(dir=='a'){
                q.addCom('s');
            }
            if(dir=='s'){
                q.addCom('d');
            }
            if(dir=='d'){
                q.addCom('w')
            }
            this.iteration = 0;
        } else {
            this.iteration++;
        }

    }
}