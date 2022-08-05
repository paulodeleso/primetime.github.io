$(document).ready(function(){
    $('.owl-two').owlCarousel({
        margin:20,
        loop:true,
        responsiveClass:true,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive:{
            0:{
                items:1,
                loop:true,
                nav:true,
                autoWidth:true,
                center: true,
            },
            600:{
                items:1,
                loop:true,
                nav:false,
                autoWidth:true,
                center: true,
            },
            1000:{
                items:7,
                loop:true,
                nav:true,
                autoWidth:true,
            }
        }
    });

    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive:{
            0:{
                items:1,
                loop:true,
                nav:true
            },
            600:{
                items:1,
                loop:true,
                nav:false
            },
            1000:{
                items:1,
                loop:true,
                nav:true,
                loop:false
            }
        }
    });
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Center Carousel//

