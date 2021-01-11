function functionParamVar (...list){
    return "bonjour "+list.join(",");
}

let invoc1 = functionParamVar("1","2","3","4","5");
console.log(invoc1);
let invoc2 = functionParamVar("alpha","beta","gamma","epsilon","pi","omega");
console.log(invoc2);

function addDiv(texte){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = texte;
    document.body.append(newDiv);
}



function functionParamVar2 (...list){
    let tmp = 0;
    for (let element of list){
        if (isNaN(parseFloat(element)) === false){

            tmp = tmp+parseFloat(element);
        }
    }
    return tmp;
}

let invoc3 = functionParamVar2("1","2.5","3","4","5","number","integer");
addDiv(invoc3);

let invoc4 = functionParamVar2("alpha",4,"beta",2,"gamma",2,"22",8.367,"pi","omega");
addDiv(invoc4);

let invoc5 = functionParamVar2("a",2.65,"e","65.85",25.6987);
addDiv(invoc5);



function functionParamVar3 (...list){
    let tmp = 0;
    for (let element of list){
        if (isNaN(parseFloat(element)) === false){
            tmp = parseInt(tmp+(parseFloat(element)*11.76));
        }
    }
    return tmp;
}

let invoc6 = functionParamVar3("1","2.5","3","4","5","number","integer");
addDiv(invoc6);

let invoc7 = functionParamVar3("alpha",4,"beta",2,"gamma",2,"22",8.367,"pi","omega");
addDiv(invoc7);

let invoc8 = functionParamVar3("a",2.65,"e","65.85",25.6987);
addDiv(invoc8);