// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let countUp = function() {
    seconds.innerHTML = (parseInt(seconds.innerHTML))+1;
    stop = setTimeout(countUp,1000);
};

// How can you make it stop counting?
let stopCountUp = function() {
    clearTimeout(stop);
};
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

let stop;

stop = setTimeout(countUp,1000);
