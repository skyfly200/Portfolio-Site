import $ from 'jquery';

// topic card open
var $currentTopic = '';

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
    // remove topic-expanded class from all expanded topics
    $('.topic-expanded').removeClass('topic-expanded');

    // select all topics and fade them out
    $('.topic').stop().fadeOut("fast", function () {
      // add topic-expanded class to selected topic and inverse class to topics container
      $topic.addClass('topic-expanded');
      $(".topics-container").addClass("feature-topic");

      // run initilizer for topic
      $currentTopic = $topic;
      //initImageSlider($topic.attr('id'));

      // fade in new view
      $topic.fadeIn("fast");

      // section top position relative to the document
      var pos = $topic.parent().offset().top;

      // animated scroll to top of topic
      $('body, html').stop().animate({scrollTop: pos});

    });

    // load topic content in to section
    $topic.find('.topic-full').load(("views/skills/" + $topic.attr('id').replace(/_/g, "") + ".html"));
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
