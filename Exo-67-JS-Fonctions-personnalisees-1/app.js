function changePara(id,text){
    document.getElementById(id).innerHTML=text;
}
let para=document.getElementsByTagName("p");
for (let i=0 ; i<para.length; i++){
    changePara("p"+(i+1),"ceci est le paragraphe"+(i+1));
}