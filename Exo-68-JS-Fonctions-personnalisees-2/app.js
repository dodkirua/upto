let elements=document.getElementsByTagName("p");

function alea(){
    return Math.trunc(Math.random()*100);
}

for (let i=0 ; i < elements.length; i++){
    elements[i].innerHTML=alea();
}