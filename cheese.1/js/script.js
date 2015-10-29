//var random_images = ["sushi1.png", "sushi2.png", "sushi3.png", "sushi4.png", "sushi5.png", "sushi6.png", "sushi7.png", "sushi8.png", "sushi9.png"];

//console.log("its working")


//$(".toggle").click(function() {


  //  $(".images").each(function() {
    //    var randomimg = random_images[Math.floor(Math.random()*random_images.length)];
       // $(this).html("<img src='img/"+ randomimg + "'>");
   // });
//});

//$(".toggle").click(function() {


   // $(".sushi").each(function() {
    //    var randomimg = random_images[Math.floor(Math.random()*random_images.length)];
     //   $(this).html("<img src='img/"+ randomimg + "'>");
  //  });
// });


$(".sidebar div").click(function() {
    var passedObject = $(this).clone();
    passedObject.css("width",$(this).data('new'));
   passedObject.css("transform",'rotate(180deg)');
    $(".stage").append(passedObject); 
});