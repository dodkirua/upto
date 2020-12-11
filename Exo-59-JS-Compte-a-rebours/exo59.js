let i=60;
function countdown(){
        setInterval(countdown2(),1000);
        console.log(i);
}


function countdown2(){
    document.getElementById("compte").innerHTML=i ;
    i--;
}