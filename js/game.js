const { COPYFILE_EXCL } = require("constants")




function Start(){
    
    setInterval(Game(),9)
}
function Game(){
    var canvas = document.getElementById("game")
    if(canvas.getContext){
    var ctx = canvas.getContext('2d')

    ctx.beginPath();
   if(addEventListener("keydown","W")){
        tron = ctx.fillRect(10,10,10,10)
        
    }

    }
    
}