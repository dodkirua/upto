
let arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];

//Methode js native pour parcourir un tableau d'objets ( avec for...in )
for(let i in arrObj) {
    // i est l'index de mon tableau d'objet
    console.log("index = " + i);

    // j'accède à mon tableau d'objet comme n'importe quel tableau
    console.log("arrObj = " + arrObj[i]);

    // J'accéde à une propriété particuliére de mon objet ,ici l'age
    console.log("age = " + arrObj[i].age);
}

//Autre méthode : utilisation de forEach
arrObj.forEach(function(arr) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   console.log("Resultat avec foreach = " + arr.age);
});

//Méthode utilisant jQuery
$.each(arrObj, function(index, value) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   console.log("Affichage age utilisant jQuery = " + value.age);
});

if ($("#container").length !== 0){
    let index = 0;
    change(index);

    $(".change").click(function (){
        switch ($(this)[0].id){
            case "before":
                if (index !== 0){
                    index --;
                }
                else {
                    index = arrObj.length-1;
                }
                change(index);
                break;
            case "after":
                if (index !== arrObj.length-1){
                    index ++;
                }
                else {
                    index = 0;
                }
                change(index);
                break;
        }
    })
}

let list = $("#list");
if (list.length !== 0){
    for (let i in arrObj){
        list.append("<div> <img src='"+arrObj[i].avatar+"' alt='avatar'"+i+"> nom: "+arrObj[i].person+" age : "+arrObj[i].age+"</div>")
    }
}


function change(index){
    $("#avatar").css("background-image", "url('"+arrObj[index].avatar+"')");
    $("#person").html(arrObj[index].person);
    $("#age").html("("+arrObj[index].age+")");
}