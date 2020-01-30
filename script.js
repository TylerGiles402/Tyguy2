var totalEle = document.body.querySelector(".total");
var taxEle = document.body.querySelector(".tax");
var sumEle = document.body.querySelector(".sum");
var tipEle = document.body.querySelector(".tip");
var finalEle = document.body.querySelector(".final");

var totalPrompt = Number(prompt("What is the total bill amount"));
var taxPrompt = Number(prompt("What is the tax on the bill?"));
var sumPrompt = Number(prompt("What is the summed bill amount?"));
var tipPrompt = Number(prompt("What is the tip?"));
var finalPrompt = Number(prompt("What is the final bill total?"));

totalEle.innerHTML="The total bill amount is "+totalPrompt;
taxEle.innerHTML="The tax on the bill is "+taxPrompt;
sumEle.innerHTML="The summed tax bill amount is "+sumPrompt;
tipEle.innerHTML="The tip on the bill is "+tipPrompt;
finalEle.innerHTML= "The final total is "+finalPrompt;