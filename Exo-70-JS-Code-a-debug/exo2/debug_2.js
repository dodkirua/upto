let main = document.getElementById("main");

main.id = "main2";

main.style.display = "hidden";

document.getElementById('main2').innerHTML = "Mon nouveau texte !";

let html = main.innerHTML;

alert(html);

if(html) {
    console.log(html);
}
else {
    let test = document.getElementById('test');
    if(test) {
        alert(test);
    }
}


main = document.getElementById('main2');
main.style.display = "block";


