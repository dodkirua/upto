
let valArray = [];
let newDiv = document.createElement("div");
newDiv.innerHTML = "entrer au moins 10 valeurs" ;
let newDiv2 = document.createElement("div");
document.body.append(newDiv);
document.body.append(newDiv2);


document.addEventListener("click", function (e){
    switch (e.target.innerHTML){
        case "Valider":
            buttonValider();
            break;
        case "Random":
            buttonRandom();
            break;
        case "All":
            buttonAll();
            break;
        case "Dell":
            buttonDel()
            break;
        case "DellAll":
            buttonDelAll()
            break;
    }
});

function buttonValider(){
    valArray.push(document.querySelector("input").value);
    if (valArray.length > 9){
        newDiv.innerHTML = valArray[Math.floor(Math.random()*valArray.length)];
    }
    if (valArray.length > 4){
        newDiv2.innerHTML = valArray[4];
    }
    document.querySelector("input").value = "";
}

function buttonRandom(){
    newDiv2.innerHTML = valArray[Math.floor(Math.random()*valArray.length)];
}

function buttonAll(){
    let newP;
    newDiv2.innerHTML="";
    for (let i = 0; i < valArray.length ; i++){
        newP = document.createElement("p");
        newP.innerHTML = i+"-"+valArray[i];
        newDiv2.append(newP);
    }
}

function buttonDel(){
    valArray.pop();
}

function buttonDelAll(){
    valArray.splice(0,valArray.length-1);
    newDiv.innerHTML = "entrer au moins 10 valeurs" ;
}