var x = document.getElementById("nav");
function myFunction(){
    if(true){
      nav.style.display="none";
    }
}
/*
var y = document.getElementById("show");
function myFunction(){
    if(true){
      nav.style.display="none";
      show.style.display="block";
    }
}*/


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
    nav.style.display="block";
  } else {
    myBtn.style.display = "none";
    nav.style.display="block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}