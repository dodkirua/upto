let button = document.getElementsByTagName("button");
let nb = 0;
let stopInterval;
document.addEventListener("click",(e) => {
    switch (e.target){
        case button[0] :
            setTimeout(addDiv,2000);
            break;
        case button[1] :
            console.log("start interval")
            stopInterval = setInterval(addDiv2,60000);
            break;
        case button[2] :
            clearInterval(stopInterval);
            break;
        default:
            break;
    }
})




function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addDiv(){
    let newDiv=document.createElement("div");
    newDiv.style.backgroundColor =getRandomColor();
    newDiv.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !";
    document.getElementById("timeout-div").append(newDiv);
}

function addDiv2(){
    nb = nb+60;
    let newDiv=document.createElement("div");
    newDiv.style.backgroundColor =getRandomColor();
    newDiv.innerHTML = nb;
    document.getElementById("interval-div").append(newDiv);
}