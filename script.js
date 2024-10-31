/*
    var audio=new Audio('./sounds/crash.mp3')
    var n =document.querySelectorAll("button").length;
    for(var i=0;i<n; i++){
     document.querySelectorAll("button")[i].addEventListener("click",click)
    }
    function click(){
        console.log(this.innerHTML)
        this.classList.add("white")
        audio.play()
        };*/
var n =document.querySelectorAll("button").length;
for(var i=0;i<n; i++){
 document.querySelectorAll("button")[i].addEventListener("click",click);
}

function click(){
    console.log(this.innerHTML)
    var events=this.innerHTML;
    Switch(events)
    };
/*function clicks(event){
    console.log(event)
    var events=event;
    Switch(events)
    };*/
    document.addEventListener("keypress",function(events){
        clicks(events)
    })
    function clicks(events){
    console.log(events)
    Switch(events.key)
    };
function Switch(play){
    switch(play){
        case 'w':
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;
        case 'a':
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;
        case 's':
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;
        case 'd':
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;
        case 'j':
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
        break;
        case 'k':
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
        break;
        case 'l':
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
        break;
    }

}
        

