
var random_images = ["haiku1.png", "haiku2.png", "haiku3.png", "haiku4.png", "haiku5.png", "haiku6.png", "haiku7.png", "haiku8.png", "haiku9.png",
"haiku10.png", "haiku11.png", "haiku12.png", "haiku13.png", "haiku14.png", "haiku15.png", "haiku16.png", "haiku17.png",
"haiku18.png", "haiku19.png", "haiku20.png", "haiku21.png", "haiku22.png", "haiku23.png", "haiku24.png", "haiku25.png", "haiku26.png",
"haiku27.png", "haiku28.png", "haiku29.png", "haiku30.png", "haiku31.png", "haiku32.png", "haiku33.png", "haiku34.png", "haiku35.png", "haiku36.png",
"haiku37.png", "haiku38.png", "haiku39.png", "haiku40.png"
];



//$(".images").html("images"[(Math.random()* random_images.length)]);
console.log("its working")

$(".toggle").click(function() {


    $(".haiku").each(function() {
        var randomimg = random_images[Math.floor(Math.random()*random_images.length)];
        $(this).html("<img src='img/"+ randomimg + "'>");
    });
});

 var random__images = ["puppies.jpg", "alpacasso.jpg", "panda.JPG", "cinnabon.jpg", "innout.jpg", "tacoshop.jpeg", "cacti.jpg",
"cactusman.jpg", "cactusman.jpg", "minnie1.jpg", "minnie2.jpg", "kimchi.jpg", "IMG_0566.JPG", "alpacasso2.jpg", "hopkins.jpg", "flooffycow.jpg", "polaroid.jpg",
"blank.jpg", "prattcat.jpg", "hopkins.jpg", "jellyfish.jpg", "painting.jpg", "bed.jpg", "rubios.jpg", "usher.jpg", "toilet.jpg", "99ranch.jpg",
"puff.jpg", "kale.png", "redpanda.jpg", "koala.jpg", "koalafun.jpg", "chinafun.jpg", "bcd.jpg",
"puppies.gif", "pom.gif", "pom2.gif", "pom3.gif", "haiku.jpg", "painting.jpg", "sushi6.png",
"gasstation.png", "kumon.jpg", "redbull.jpeg", "flower.jpg", "mountainsquirrel.jpg", "shining.jpg", "potty.jpg", "palmtrees.jpg",
"shell.png", "box.jpg", "fish.jpg", "goldfish.jpg", "badtattoo.jpg", "fishpie.jpg", "amazon.jpg", "pasta.jpg", "stumped.jpg",
"thankyou.jpeg", "mask.png", "recycle.jpg", "rain.jpeg", "squid.png", "oldpoway.jpg", "sapphire.jpg", "laundry.jpg", 
"chicken.png", "fishbread.jpg", "chalk.jpg", "egg.jpeg", "marble.jpg", "cube.jpg", "tumble.jpg", "sandwiches.png", "chrome.jpg",
"retainer.jpg", "dentist.jpg", "golf.jpg", "nickel.jpg", "tony.jpg", "tired.jpg", "apple.jpeg", "shrek.jpg", "vest.jpg", 
"garden.jpg", "dropped.jpg", "pompom.jpg", "nsync.png", "coffin.jpg", "costume.jpg", "veggies.jpg", "toeshoes.jpg", 
"cheese.jpg", "pumpkin.jpg", "tp.jpg"]

$(".toggle").click(function() {


  $(".content").each(function() {
       var randomimg = random__images[Math.floor(Math.random()*random__images.length)];
    $(this).html("<img src='img/"+ randomimg + "'>");
   });
   });
   
   
/* var randomImage = new Array();
 
randomImage[0] = "http://lorempixel.com/400/200";
randomImage[1] = "http://lorempixel.com/500/300";
randomImage[2] = "http://lorempixel.com/600/400";
 
function getRandomImage() { 
var number = Math.floor(Math.random()*randomImage.length);
document.write('<img src="'+randomImage[number]+'" />');
}
getRandomImage()

*/


$('.toggle').click(function(){
    var $this = $(this);
    $this.toggleClass('.toggle');
    if($this.hasClass('.toggle')){
        $this.text('next');         
    } else {
        $this.text('next');
    }
});








