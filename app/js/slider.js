// Video FlexSlider API Variables
var tag,
  vimeoPlayer,
  youtubePlayer,
  firstScriptTag,
  youtubePlayers = [],
  vimeoPlayers = [],
  $videoSlider = $("#video-slider .flexslider");


$(function(){
  // YouTube API setup
  // Load the iFrame Player API code asynchronously.
  tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // initialize image, 3d and video FlexSliders
  initImgSlider();
  init3dSlider();
  initVideoSlider();
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
  $('#img-slider').flexslider({
    animation: "fade",
    controlNav: "thumbnails",
    animationLoop: true,
    slideshow: true,
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
}


function init3dSlider() {
  // initialize 3d model gallery FlexSlider
  // The slider being synced must be initialized first

  $('#_3d-slider').flexslider({
    animation: "fade",
    animationLoop: true,
    slideshow: true,
    //slideshowSpeed: 3000,
    //pauseOnHover: true,
    itemWidth: 400,
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
}

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
  $videoSlider
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
  $videoSlider.flexslider("pause");
}

function flexsliderPlay() {
  $videoSlider.flexslider("play");
}

function pausePlayers() {
  for (key in youtubePlayers) {
    youtubePlayers[key].pauseVideo();
  }
  for (key in vimeoPlayers) {
    vimeoPlayers[key].api('pause');
  }
}
