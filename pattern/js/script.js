var random_images = ["sushi1.png", "sushi2.png", "sushi3.png", "sushi4.png", "sushi5.png", "sushi6.png", "sushi7.png", "sushi8.png", "sushi9.png"];



//$(".images").html("images"[(Math.random()* random_images.length)]);
console.log("its working")

//function randomImg() {
   // var rnd = Math.floor(Math.random() * myImages1.length);
    //console.log("hello, its working")
    //if ( rnd == 0) {
      //  rnd= 1;
    //}
//}

//getRandomImage(random_images);</script>

//function getRandomImage() {
//var random_images = ["sushi1.png", "sushi2.png", "sushi3.png", "sushi4.png", "sushi5.png", "sushi6.png", "sushi7.png", "sushi8.png", "sushi9.png"];
//}
//var random_images = images[Math.floor(Math.random()*images.length)];
$(".toggle").click(function() {


    $(".images").each(function() {
        var randomimg = random_images[Math.floor(Math.random()*random_images.length)];
        $(this).html("<img src='img/"+ randomimg + "'>");
    });
});
//$("div").html(random_images);
 
/*return image;
}
 
function displayRandomImage() {
var htmlImage = document.getElementById("randomImage");
htmlImage.src = getRandomImage();
}
displayRandomImage();*/