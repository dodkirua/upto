let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));
document.getElementById("index-pomme").innerHTML = pomme.indexOf("pomme");
document.getElementById("last-index-m").innerHTML = pomme.lastIndexOf("m");
if (pomme.includes("Elle")){
    console.log("Elle est belle ma pomme ! Commence par Elle");
}
if (pomme.endsWith("!")){
    console.log("Elle est belle ma pomme ! Se termine par un point d'exclamation");
}

document.getElementById("pomme").innerHTML = pomme.substring(pomme.indexOf("pomme")).substring(0,5);

let oneLine = document.getElementById("one-line");
let para;
for (let i = 0 ; i < pomme.length ; i++){
    para = document.createElement("p");
    para.innerHTML = pomme[i];
    oneLine.append(para);
}