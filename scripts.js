let itemName = prompt('Enter the name of the item');
let basePrice = prompt('What is the base price of the item?');
let blackFriday = prompt('Is today"Black Friday"?');
let searchEngine = prompt('Did the purchaser find the product through a search engine?');
let comparisonShopping = prompt('Did the purchaser visit a comparison-shopping site?');

let message1 = `The base price for the ${itemName} is $${basePrice}. `
let message2 = " You are lucky! Since it's Black Friday, we will reduce the price by 25%. " ;
let message3 = " It's not Black Friday, so the price didn't change for that.";
let message4 = "No sales today. "


let finalprice;

if (blackFriday === "yes") {
    finalPrice = (basePrice - (basePrice * .25));
    console.log(finalPrice);
    message1 += message2;
    document.getElementById("message1").innerHTML = message1;
} else {
    message1 += message3;
    document.getElementById("message1").innerHTML = message1;
}


let message5 = " The purchase came through a search engine, so we will increase the price by 1%.";
let message6 = " The customer didint use a search engine, so the price didn't change for that.";

if (searchEngine ==="yes"){
    (message2) += message5;
    finalPrice = 1.01;
    document.getElementById("message2").innerHTML = message1;
} else{
    message3 += message6;
    document.getElementById("message2").innerHTML = message1;
}

let message7 = `Since the customer visited a comparison-shopping site, we will reduce the price by 10%. The final price is ${finalPrice}.`;
let message8 = " All done!"


if (comparisonShopping === "yes"){
    message1 += message7;
} else{
    message1 += message8;
}