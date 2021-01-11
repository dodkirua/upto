// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :

let listCourse = document.getElementById("listeCourse");
let viewport = document.getElementById("viewport");
let listButton;
let listDivButton;
let token = false;
let lien;


arrayInHtml();
add();
addDiv();

listButton = document.getElementsByTagName("button");
listDivButton = document.getElementsByClassName("del");

function arrayInHtml() {
    let li;
    let liButton;
    listCourse.innerHTML = "";
    for (let i = 0; i < articles.length; i++) {
        li = document.createElement("li");
        liButton = document.createElement("div");
        liButton.className = "del";
        liButton.innerHTML = "";
        liButton.style.height = "20px";
        liButton.style.width = "20px";
        liButton.style.backgroundColor = "red";
        liButton.style.display = "inline-block"
        if (token === true){
            let link = document.createElement("a");
            link.href = "https://www.ecosia.org/search?q="+articles[i];
            link.innerHTML = articles[i];
            li.append(link);
        }
        else {
            li.innerHTML = articles[i];
        }
        listCourse.append(li);
        li.prepend(liButton);
        listDivButton = document.getElementsByClassName("del");
    }

}

function add (){
    lien = document.createElement("button");
    lien.innerHTML = "Lien";
    lien.className = "lien";
    viewport.prepend(lien);
    let input = document.createElement("input");
    viewport.append(input);
    let valid = document.createElement("button");
    valid.innerHTML = "Valider";
    valid.className = "valider";
    viewport.append(valid);
    let del = document.createElement("button");
    del.innerHTML = "Supprimer";
    del.className = "supprimer";
    viewport.append(del);
    let sort = document.createElement("button");
    sort.innerHTML = "Trier";
    sort.className = "trier";
    viewport.append(sort);
}

function addDiv() {
    if (document.getElementsByTagName("div").length > 1){
        let divList = document.getElementsByTagName("div");
        divList[divList.length-1].remove();
    }
    let newDiv = document.createElement("div");
    document.body.append(newDiv);
    let newP;
    for (let i = 0 ; i < articles.length ; i++){
        newP = document.createElement("p");
        newP.innerHTML = articles[i];
        newDiv.append(newP);
    }
}


document.addEventListener("click", function (e){
    let tmp;
    let click = e.target.className;
    let input = document.getElementsByTagName("input");
    switch (click){
        case "valider" :
            tmp = input[0].value;
            tmp = tmp[0].toUpperCase()+tmp.substring(1);
            articles.push(tmp);
            input[0].value = "";
            arrayInHtml();
            addDiv();
            break;
        case "supprimer" :
            articles.pop();
            arrayInHtml();
            addDiv();
            break;
        case "lien":
            token = true;
            lien.innerHTML = "Liste";
            lien.className = "liste";
            arrayInHtml();
            break;
        case "liste":
            token = false;
            lien.innerHTML = "Lien";
            lien.className = "lien";
            arrayInHtml();
            break;
        case "del" :
            tmp = e.target.parentElement.innerText;
            articles.splice(articles.indexOf(tmp),1);
            arrayInHtml();
            addDiv();
        case "trier" :
            tmp = articles.sort();
            articles = tmp;
            arrayInHtml();
            addDiv();
    }

});



