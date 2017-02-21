// Page intialize
$(function(){
  // WOW js init
  new WOW().init();

  // set copright date
  $('.copyright').html('&copy; Skyler Bright Fly-Wilson ' + new Date().getFullYear());

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

    // load topic content in to section
    $section.find('.topic-full').load(("skills/" + $section.attr('id').replace(/_/g, "") + ".html"));
  } else {
    // top position relative to the document
    pos = $(section).parent().offset().top;
  }

  // move scroll scroll position to top of section
  $('body, html').css("scrollTop", pos);

});
