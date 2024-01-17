
var noofbuttons= document.querySelectorAll(".drum").length;
for (var i=0; i<noofbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonclicked = this.innerHTML;
        makesound(buttonclicked);
        animation(buttonclicked);
         
        
        });

    }

    document.addEventListener("keydown", function(event){

        makesound(event.key);
        animation(event.key);
    });

   function makesound(key){
        switch(key){
            case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case "a":
                var kick= new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case "s":
                var snare= new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "d":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "k":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "j":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
                
            }

    }

function animation(key){
    var currentkey=document.querySelector("."+key);
    currentkey.classList.add("pressed");
    setTimeout(() => { currentkey.classList.remove("pressed") }, 100);

}


