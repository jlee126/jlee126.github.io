var counter = 0;


$("h1").click(function() {
    if (counter < 10) {
    $("h1").append("...");
    }
    $("h1").toggleClass("myclass");
    counter++;
    console.log(counter);
});

$("h1").click(function() {
    $("h1").prepend("..");
    counter++;
    console.log(counter);
});


var person = {
    name: "Jenny", 
    age: 21,
    gender: "female",
    currentLocation: "Brooklyn, NY"
}

//this is a note... afjsldfjla
//also a note


console.log("hello world");

var blackjack = 21;

function myFunction(arg1, arg2) {
    console.log("hello world");
}

function addNumbers(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
    return sum; 
}