var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

//function changePosition(x,y){ 
  // ball.x = ball.x + x;
   // ball.y = ball.y + y;
//}
function writePosition(x,y){
    database.ref('ball/position').set
    ({'x':position.x+x,'y': position.y+ y})}
    function readPosition(data)
    { position = data.value(); 
console.log(position.x);
hypnoticBall.x = position.x; 
 hypnoticBall.y = position.y; } 
function showError()
{ console.log("Error in writing to the database"); }