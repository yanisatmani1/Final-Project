
var name = prompt("Hi! What is your name?");
console.log(name);
alert("Hi " + name);

var name = prompt("How is your day going today" + "?");
console.log(name);
alert("I hope you have a great day today!");

document.body.style.backgroundColor = "lightgreen";


var name_change = document.getElementById("page");
name_change.textContent = name + " is making this webpage.";

var factButton = document.getElementById("factButton");

var factButton = document.getElementById("factButton");

factButton.addEventListener("click", function () {
    document.getElementById("factOutput").textContent =
        "Trees 'talk' to each other, sharing nutrients through the 'Wood Wide Web'.";
});

function button() {
    document.getElementById("factOutput").textContent =
        "did you know that Trees 'talk' to each other, sharing nutrients through the 'Wood Wide Web'?";
}

//I got help from a classmate to create the button

function showService(serviceName) {
    console.log(serviceName);
}


  var services = ["Lawn Mowing", "Leaf Removal", "Garden Design", "Tree Trimming", "Pest Control"];
    var servicesList = document.getElementById("servicesList");
    // i searched up how to make a list in javascript

    for (var i = 0; i < services.length; i++) {
    console.log(services[i]);
}
    // i searched up and refreshed my memory on how to create a loop for my services provided above.

    if (services.price<50) {
    console.log("expensive services");
} else {
    console.log("cheap services");
}
// i looked back at powerpoint slides for if and else statements.
    
setInterval(function() {
    console.log("Thank you for visiting my website!");
}, 5000);
// I went into the Javascript follow along powerpoint and then searched up how to add a timer.