
function recurs(a){
    a = a + 2;
    let newP = document.createElement("p");
    newP.innerHTML = (a);
    document.body.append(newP);
    if (a < 500){
        recurs(a)
    }
}
recurs(0);