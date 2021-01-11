const DAY = 24*60*60*1000;
const HOURS = 60*60*1000;
const MINUTE = 60*1000;
const SECOND = 1000;

let date = new Date();

document.getElementById("timestamp").innerHTML = date.getTime();

document.getElementById("localTime").innerHTML = date.toLocaleTimeString();

document.getElementById("localDate").innerHTML = date.toLocaleDateString();

let dayAdd2 = new Date();
dayAdd2.setDate(date.getDate() + 1);
dayAdd2.setHours(date.getHours() + 6);


if (dayAdd2.getTime() > date.getTime()){
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    let dif = dayAdd2.getTime() - date.getTime();
    let day = Math.floor(dif/DAY);
    let hours = Math.floor((dif - day*DAY)/HOURS);
    let minute = Math.floor((dif - day*DAY - hours*HOURS)/MINUTE);
    let seconde = Math.floor((dif - day*DAY - hours*HOURS - minute*MINUTE)/SECOND);
    newP.innerHTML = "Aujourd'hui nous sommes le : "+date.toLocaleDateString()+" "+date.toLocaleTimeString();
    newDiv.append(newP);
    newP = document.createElement("p");
    newP.innerHTML = "A la nouvelle dates  nous serons le : "+dayAdd2.toLocaleDateString()+" "+dayAdd2.toLocaleTimeString();
    newDiv.append(newP);
    newP = document.createElement("p");
    newP.innerHTML = "Il y a une différence de  : " + day.toString().padStart(2,0) + "jour(s) " + hours.toString().padStart(2,0) + " heure(s)" + minute.toString().padStart(2,0) + " minute(s) " + seconde.toString().padStart(2,0) + " seconde(s)";
    newDiv.append(newP);
    document.body.append(newDiv);
}