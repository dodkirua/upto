let key = $(".key");
let audio;
let star = $("*");

star.keypress(function (e) {

    for (let i = 0 ; i < key.length ; i++){

        if (key.eq(i).children().eq(0).html() === e.originalEvent.key.toUpperCase()){
            key.eq(i).addClass("playing");
            audio = new Audio("./sounds/"+key.eq(i).children().eq(1).html()+".wav");
            audio.play();
            setTimeout(toggle,50,i);
        }

    }
});

function toggle (i){
    key.eq(i).removeClass("playing");
}