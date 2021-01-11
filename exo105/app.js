const STORAGE = window.localStorage;
STORAGE.setItem("k1","18");
STORAGE.setItem("k2","Material");
STORAGE.setItem("k3","Black");


function message () {
    let p = document.createElement("p");
    document.getElementById("result").append(p)
    p.innerHTML= "Thème " + STORAGE.getItem("k3") + ", type " + STORAGE.getItem("k2") + " et police de caractères " + STORAGE.getItem("k1") + " px";
}

message();
STORAGE.clear();

STORAGE.setItem("k1","25");
STORAGE.setItem("k2","Dumbeldor");
STORAGE.setItem("k3","Yellow");

message();

function storageToArray(){
    let key,string = "";
    for (let i = 0 ; i < STORAGE.length ; i++){
        key = STORAGE.key(i);
        string += key+"&"+STORAGE.getItem(key)+"|";
    }
    string = string.substring(0,(string.length-1));
    STORAGE.clear();
    return string;

}

function arrayToStorage(string){
    let array = string.split("|");
    let link;
    for (let i = 0; i < array.length ; i++){
        link = array[i].split("&");
        STORAGE.setItem(link[0],link[1]);
    }
}

let tmp = storageToArray();
console.log(tmp);
console.log(STORAGE);

arrayToStorage(tmp);
console.log(STORAGE);