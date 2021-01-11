let button = document.getElementsByTagName("button");
let nb = 0;
let stopInterval;

document.addEventListener("click",(e) => {
    switch (e.target){

        case button[0] :
            console.log("start interval")
            stopInterval = setTimeout(addDiv,60000);
            break;
        case button[1] :
            clearTimeout(stopInterval);
            nb = 0;
            token = 1;
            break;
        default:
            break;
    }
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addDiv(){
    nb = nb+60;
    let newDiv=document.createElement("div");
    newDiv.style.backgroundColor =getRandomColor();
    newDiv.innerHTML = nb;
    document.getElementById("interval-div").append(newDiv);
        stopInterval = setTimeout(addDiv,60000);
}