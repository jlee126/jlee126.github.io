
var random_images = ["haiku1.png", "haiku2.png", "haiku3.png", "haiku4.png", "haiku5.png", "haiku6.png", "haiku7.png", "haiku8.png", "haiku9.png",
"haiku10.png", "haiku11.png", "haiku12.png", "haiku13.png", "haiku14.png", "haiku15.png"];



//$(".images").html("images"[(Math.random()* random_images.length)]);
console.log("its working")

$(".toggle").click(function() {


    $(".haiku").each(function() {
        var randomimg = random_images[Math.floor(Math.random()*random_images.length)];
        $(this).html("<img src='img/"+ randomimg + "'>");
    });
});

var random__images = ["puppies.jpg", "alpacasso.jpg", "panda.JPG", "cinnabon.jpg", "innout.jpg", "tacoshop.jpeg"]
$(".toggle").click(function() {


  $(".content").each(function() {
       var randomimg = random__images[Math.floor(Math.random()*random__images.length)];
    $(this).html("<img src='img/"+ randomimg + "'>");
   });
   });








