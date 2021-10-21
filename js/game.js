function Start(){
document.addEventListener("DOMContentLoaded",()=>{


setInterval(Game(), 60)
function Game(){
    console.log("HEllo")
    var canvas = document.getElementById("game")
    var tron,x,y
    var pos = {x: x, y: y}
    if(canvas.getContext){
    var ctx = canvas.getContext('2d')
    pos.x=1
    tron = pos.x
    console.log(1)
    }
    
    
}


})

}