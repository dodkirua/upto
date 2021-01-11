export {createDiv,createInput,createLabel}

function createDiv(cssClass){
    let tmp = document.createElement("div");
    if (cssClass !== undefined && cssClass !== ""){
        tmp.className = cssClass;
    }
    return tmp;
}

function createInput(id,type,value,cssClass){
    let tmp = document.createElement("input");
    if (cssClass !== undefined && cssClass !== ""){
        tmp.className = cssClass;
    }
    if (id !== undefined && id !== ""){
        tmp.id = id;
    }
    if (value !== undefined && value !== ""){
        tmp.value= value;
    }
    else {
        tmp.value= "";
    }
    if (type !== undefined && type !==""){
        tmp.type = type;
    }
    else{
        tmp.type = "text";
    }
    return tmp;
}

function createLabel(id,text,cssClass) {
    let tmp = document.createElement("label");
    if (cssClass !== undefined && cssClass !== ""){
        tmp.className = cssClass;
    }
    if (id !== undefined && id !== ""){
        tmp.htmlFor = id;
    }
    if (text !== undefined){
        tmp.innerHTML = text;
    }
    return tmp;
}