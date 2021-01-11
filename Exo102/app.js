let button = document.getElementsByTagName("button")[0];
let button2 = document.getElementsByTagName("button")[1];
let newWindow;

document.addEventListener("click", e => {
    switch (e.target){
        case button :
            let features = "width = 500 , height=500";
            newWindow = open("https://www.fanfiction.net/",'',features);
            newWindow.moveBy(250,250);
            break;
        case button2 :
            newWindow.close();
            break;

        default :
            break;
    }
});