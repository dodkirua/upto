$("button").click(function (event){
    let form = $(".form");
    switch (event.target.innerHTML) {
        case "Vider" :
            form.children().removeClass("full");
            break;
        case "Remplir":
            form.children().addClass("full");
            break;
    }
});

$(".circle").click(function (){
    $(this).toggleClass("full");
});

function line(dom){
    for (let i = 1 ; i < 6 ; i++){
        let lin = "line"+i;
        if (dom.hasClass(lin)){
            return lin;
        }
    }
}

$(".square").click(function (){
    $(this).toggleClass("full");
    let lin = line($(this));
    if ($(this).hasClass("full")){
        $("."+lin).addClass("full");
    }
    else {
        $("."+lin).removeClass("full");
    }
});

$(".diamond").click(function (){
    $(this).toggleClass("full");
    if ($(this).hasClass("full")){
        $(".line3,.column").addClass("full");
    }
    else {
        $(".line3,.column").removeClass("full");
    }
});