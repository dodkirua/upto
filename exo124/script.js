/**
 * FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
 */
let player = $('.player__video').first();
let progress = $('.progress__filled').first();
let play = $(".player__button");
let volume = $("#volume");
let rate = $("#playbackRate");
let token = true;
let time;

play.click(function (e){
    switch (e.target) {
        case play.get()[0] :
        if (token === true){
            player.get()[0].play();
            token = false;
            play.first().html("II");
        }
        else {
            player.get()[0].pause();
            token = true;
            play.first().html("►");
        }
        break;
        case play.get()[1] :
            if (player.get()[0].currentTime > 10) {
                player.get()[0].currentTime -= 10;
            }
            else {
                player.get()[0].currentTime = 0;
            }
            break;
        case play.get()[2] :
            if(player.get()[0].currentTime < (player.get()[0].duration-15)){
                player.get()[0].currentTime += 25;
            }
            else {
                player.get()[0].currentTime = player.get()[0].duration;
            }
            break;
    }
});

player.get()[0].addEventListener("timeupdate", function(){
    time = ((player.get()[0].currentTime/player.get()[0].duration)*100).toFixed(2);
    progress.css("left",time+"%");
    player.get()[0].volume = volume.val();
    player.get()[0].playbackRate = rate.val();
});

