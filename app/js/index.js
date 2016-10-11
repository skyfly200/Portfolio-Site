// Page intialize
$(function(){
  // initialize image and video FlexSliders
  initImgSlider();
  initVideoSlider();

  // get hash from url
  var section = window.location.hash;

  // target section element
  var $section = $(section);
  if ($section.length === 0) {
      return;
  }

  // initialize pos
  var pos = 0;

  // if url hash points to a skill topic, expand that topic and fade others out
  if ($section.hasClass('topic')) {
    // select all topics and fade them out
    $('.topic').stop().fadeOut("fast", ()=> {
      // section top position relative to the document
      pos = $section.offset().top;

      // add topic-expanded class to selected topic and inverse class to topics container
      $section.addClass('topic-expanded');
      $(".topics-container").addClass("feature-topic");

      // fade in new view
      $section.fadeIn("fast");
    });
  } else {
    // top position relative to the document
    pos = $(section).parent().offset().top;
  }

  // move scroll scroll position to top of section
  $('body, html').css("scrollTop", pos);

});

function initVideoSlider() {
  // Select FlexSlider and iframe video objects
  var $slider = $('#video-slider');
  var iframe = $('#player1')[0];

  // Froogaloop - Vimeo Player API
  var player = $f(iframe);

  function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
      element.addEventListener(eventName, callback, false)
    } else {
      element.attachEvent(eventName, callback, false);
    }
  }

  player.addEvent('ready', function(player_id) {
    var froogaloop = $f(player_id);
    froogaloop.addEvent('play', function(data) {
      $slider.flexslider("pause");
    });
    froogaloop.addEvent('pause', function(data) {
      $slider.flexslider("play");
    });
  });

  // Call fitVid before FlexSlider initializes, so the proper initial height can be retrieved.
  $slider.fitVids()
    .flexslider({
      animation: "slide",
      useCSS: false,
      animationLoop: false,
      smoothHeight: true,
      before: function(slider){
        player.api('pause');
      }
    });
}

function initImgSlider() {
  // initialize image gallery FlexSlider
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider',
    start: function(slider){
          $('body').removeClass('loading');
        }
  });

  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
    start: function(slider){
          $('body').removeClass('loading');
        }
  });
}

// WOW js init
new WOW().init();

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // get hash url from link
    var section = $(this).attr('href');

    // target section element
    var $section = $(section);
    if ($section.length === 0 || section === "#null") {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // section top position relative to the document
    var pos = $(section).offset().top;

    // animated scrolling to section
    $('body, html').animate({scrollTop: pos});
});

// Expand a topic on click
$('.topic').on("click", function() {
  // select this topic
  var $topic = $(this);

  // only run for not expanded topics
  if (!$topic.hasClass("topic-expanded")) {
    // remove topic-expanded class from all topics
    $('.topic-expanded').removeClass('topic-expanded');

    // select all topics and fade them out
    $('.topic').stop().fadeOut("fast", ()=> {
      // add topic-expanded class to selected topic and inverse class to topics container
      $topic.addClass('topic-expanded');
      $(".topics-container").addClass("feature-topic");

      // fade in new view
      $topic.fadeIn("fast");

      // section top position relative to the document
      var pos = $topic.parent().offset().top;

      // animated scroll to top of topic
      $('body, html').stop().animate({scrollTop: pos});

    });
  }
});

// Close a topic
$('.topic-close').on("click", function(event) {
  // select the topic-close parent topic
  var $topic = $(this).parent();

  // section top position relative to the document
  var pos = $('.topics-container').offset().top;

  // stop click from propigating to parents
  event.stopPropagation();

  // fade out the topic
  $topic.stop().fadeOut("fast", () => {
    // remove topic-expanded class from topic and inverse class from topics container
    $topic.delay(100).removeClass('topic-expanded');
    $(".topics-container").removeClass("feature-topic");

    // animated scroll to top of skills section
    $('body, html').stop().animate({scrollTop: pos});

    // show all topics
    $('.topic').stop().fadeIn("fast");

  });

});
