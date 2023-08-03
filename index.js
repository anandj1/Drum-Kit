var e1= document.querySelectorAll(".drum");
for(var i=0;i<e1.length;i++){
    e1[i].addEventListener("click",function(){
      var imp= this.innerHTML;
      // Button Pressing
      keypress(imp)
      animate(imp)
      })


      

      
    }
    // keyboard pressing
  document.addEventListener("keydown",function(event){
    keypress(event.key)
    animate(event.key)
  })


function keypress(key){
  switch (key) {
    case ("w"):
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case ("a"):
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case ("s"):
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
    case ("d"):
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    case ("j"):
              var audio = new Audio("sounds/tom-2.mp3");
              audio.play();
              break;
     case ("k"):
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
     case ("l"):
                  var audio = new Audio("sounds/tom-4.mp3");
                  audio.play();
                  break;
     default:
      console.log(imp)
      break;

}}
function animate(charc){
  var activate= document.querySelector("."+charc);
  activate.classList.add("pressed");
  setTimeout(function(){activate.classList.remove("pressed")},150);

}


   
