
var words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten" ];

$("h1").each(function() {
    $(this).html(words[Math.floor(Math.random() * words.length)]);
});

var topPosition = Math.floor(Math.random()*500) + "px";
var leftPosition = Math.floor(Math.random()*500) + "px";

$(".dot").css("top", topPosition).css("left",leftPosition).css("width", topPosition).css("height", leftPosition)

$("body").append("<div class = 'dot'></div");

for(var increment = 0; increment<100; increment ++) {
    
}

$(".dot").each(function() {
    
    var topLocation = Math.floor(Math.random()*500) + "px";
var leftLocation = Math.floor(Math.random()*1000) + "px";
    
    $(this).css("top", topLocation.css("left",leftLocation).css("width", topLocation).css("height", leftLocation)
}