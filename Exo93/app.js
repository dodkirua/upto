let button = document.getElementsByTagName("button");

button[0].addEventListener("click",() => alert("Hello World"));

function addDiv(){
    let div = document.createElement("div")
    div.style.border = "black 2px solid";
    div.innerHTML = 5 + 6;
    document.body.prepend(div);
}

button[1].addEventListener("click",() => addDiv());

button[1].addEventListener("mouseenter", (e) => e.target.style.backgroundColor="red");
button[1].addEventListener("mouseleave",(e) => e.target.style.backgroundColor = "lightgrey")
button[1].addEventListener("click" , (e) => e.target.style.color = "blue");

button[0].addEventListener("mouseenter", (e) => e.target.style.backgroundColor="red");
button[0].addEventListener("mouseleave",(e) => e.target.style.backgroundColor = "lightgrey")
button[0].addEventListener("click" , (e) => e.target.style.color = "blue");