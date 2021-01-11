// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

p1.dataset.number = ((parseInt(p1.dataset.number) + 10).toString() );

p2.dataset.string = p2.dataset.string+" est une chaine de caractère de longueur : "+p2.dataset.string.length;


let p3Array = p3.dataset.array.split("|");
for (let i = 0 ; i < p3Array.length ; i++){
    p3.innerHTML += "<br>"+p3Array[i];
}

if (p4.dataset.boolean.toLowerCase() === "true"){
    p4.innerHTML += "<br> Cette valeur est vrai";
}
else{
    p4.innerHTML += "<br> Cette valeur est fausse";
}


// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');

p5.setAttribute("data-number","25");
p5.dataset.number = ((parseInt(p5.dataset.number) + 10).toString() );
p5.innerHTML = p1.innerHTML.replace("HTML","JavaScript");

let p6 = document.getElementById('p6');

p6.setAttribute("data-string","chaine de caractère");
p6.dataset.string = p6.dataset.string+" est une chaine de caractère de longueur : "+p6.dataset.string.length;
p6.innerHTML = p2.innerHTML.replace("HTML","JavaScript");

let p7 = document.getElementById('p7');

p7.setAttribute("data-array","tata|toto|titi|tutu|tyty");
p7.innerHTML = p3.innerHTML.substr(0,p3.innerHTML.indexOf(")")+1);
p7.innerHTML = p7.innerHTML.replace("HTML","JavaScript");
let p7Array = p7.dataset.array.split("|");
for (let i = 0 ; i < p7Array.length ; i++){
    p7.innerHTML += "<br>"+p7Array[i];
}
let p8 = document.getElementById('p8');

p8.setAttribute("data-boolean","false");
p8.innerHTML = p4.innerHTML.substr(0,p4.innerHTML.indexOf("<"));
p8.innerHTML = p8.innerHTML.replace("HTML","JavaScript");
if (p8.dataset.boolean.toLowerCase() === "true"){
    p8.innerHTML += "<br> Cette valeur est vrai";
}
else{
    p8.innerHTML += "<br> Cette valeur est fausse";
}


let p9 = document.createElement("p");
document.body.append(p9);
let Utilisateur ={
    name : "Doe",
    surname : "John",
    toDataset : function (dom){
        dom.setAttribute("data-object-utilisateur","nom&"+this.name+"|prenom&"+this.surname);
        dom.innerHTML = "Depuis JavaScript - Dataset représentant la valeur de l'objet littéral Utilisateur de nom : "+this.name+" et de prénom : "+this.surname;
    }
};

Utilisateur.toDataset(p9);
