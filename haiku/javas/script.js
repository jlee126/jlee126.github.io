
var random_images = ["sushi1.png", "sushi2.png", "sushi3.png", "sushi4.png", "sushi5.png", "sushi6.png", "sushi7.png", "sushi8.png", "sushi9.png"];



//$(".images").html("images"[(Math.random()* random_images.length)]);
console.log("its working")

$(".toggle").click(function() {


    $(".haiku").each(function() {
        var randomimg = random_images[Math.floor(Math.random()*random_images.length)];
        $(this).html("<img src='img/"+ randomimg + "'>");
    });
});

var random__images = ["puppies.jpg"]
$(".toggle").click(function() {


  $(".background").each(function() {
       var randomimg = random__images[Math.floor(Math.random()*random__images.length)];
    $(this).html("<img src='img/"+ randomimg + "'>");
   });
   });







