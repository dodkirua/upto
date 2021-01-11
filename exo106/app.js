import * as utils from "./HTML.js";

document.getElementById("result").append(utils.createDiv("part0"));

document.getElementById("result").append(utils.createLabel("mail","E-mail","part1"));

document.getElementById("result").append(utils.createInput("mail","email","","part2"));

document.getElementById("result").append(utils.createLabel("pass","Password","part3"));

document.getElementById("result").append(utils.createInput("pass","password","","part4"));
