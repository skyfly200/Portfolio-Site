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
    $('.topic').stop().fadeOut("fast", function () {
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
  var iframe = $('#js-vimeo1')[0];
      vimeoPlayer = $f(iframe);

      // When the player is ready, add listeners for pause, finish, and playProgress
      vimeoPlayer.addEvent('ready', function() {
          vimeoPlayer.addEvent('pause', flexsliderPlay);
          vimeoPlayer.addEvent('play', flexsliderPause);
          vimeoPlayer.addEvent('finish', flexsliderPlay);
      });
      vimeoPlayers.push(vimeoPlayer);
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
    $('.topic').stop().fadeOut("fast", function () {
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
  $topic.stop().fadeOut("fast", function () {
    // remove topic-expanded class from topic and inverse class from topics container
    $topic.delay(100).removeClass('topic-expanded');
    $(".topics-container").removeClass("feature-topic");

    // animated scroll to top of skills section
    $('body, html').stop().animate({scrollTop: pos});

    // show all topics
    $('.topic').stop().fadeIn("fast");

  });

});

// Video FlexSlider API Variables
var tag,
  vimeoPlayer,
  youtubePlayer,
  firstScriptTag,
  youtubePlayers = [],
  vimeoPlayers = [];


// YouTube API setup
// Load the iFrame Player API code asynchronously.
tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
//tag.src = "https://www.youtube.com/player_api";
firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
function onYouTubePlayerAPIReady() {
  // Store youtube player object (iFrame ID)
  addYouTubePlayer('js-youtube1', 'gYpYreUpXYk');

  addYouTubePlayer('js-youtube2', '9o6mhFOJO5c');

  addYouTubePlayer('js-youtube3', 'AxLkKNhtkvs');

  addYouTubePlayer('js-youtube4', 'tflcA9Anjoc');
}

function addYouTubePlayer(id, video) {
  youtubePlayer = new YT.Player(id, {
    videoId: video,
    playerVars: {
      'autoplay': 0,
      'controls': 2,
      'rel': 0,
      'showinfo': 1
    },
    events: {
      'onReady': onYouTubePlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  youtubePlayers.push(youtubePlayer);
}

function onYouTubePlayerReady() {
    // Flexslider go!
    initFlexslider();
  }
  // YouTube
function onPlayerStateChange(event) {
  if (event.data === -1 || event.data === 1 || event.data === 5) {
    flexsliderPause();
  } else if (event.data === 0 || event.data === 2) {
    flexsliderPlay();
  }
}

function initFlexslider() {
  // Setting WIKI
  // https://github.com/woocommerce/FlexSlider/wiki/FlexSlider-Properties
  $(".flexslider")
    .fitVids()
    .flexslider({
      animation: "fade",
      video: true,
      useCSS: false,
      slideshowSpeed: 3000,
      pauseOnHover: true,
      before: function(slider) {
        pausePlayers();
      }
    });
}

function flexsliderPause() {
  $(".flexslider").flexslider("pause");
}

function flexsliderPlay() {
  $(".flexslider").flexslider("play");
}

function pausePlayers() {
  for (key in youtubePlayers) {
    youtubePlayers[key].pauseVideo();
  }
  for (key in vimeoPlayers) {
    vimeoPlayers[key].api('pause');
  }
}
