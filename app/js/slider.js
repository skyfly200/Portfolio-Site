// start sliders at 1st slide
var slideIndex = 1;

// onload handler
$(function(){
  // initialize 3D Slider
  init3dSlider();
});

// init custom image slider
function initImageSlider() {
  showDivs(slideIndex);
}

//
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function init3dSlider() {
  // initialize 3d model gallery FlexSlider
  // The slider being synced must be initialized first

  $('#_3d-slider').flexslider({
    animation: "fade",
    animationLoop: true,
    //slideshow: true,
    //slideshowSpeed: 3000,
    pauseOnHover: true,
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
}
