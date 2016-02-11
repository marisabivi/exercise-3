// Needs latest version of jQuery to run
$(function(){
  // Shows buttons when JS runs
  $('body').removeClass('noscript');

  // Sets buttons to toggle data-state
  $('.toggle-btn, .close-btn').click(function(){
      toggleNav();
  });
});

function toggleNav() {
  if ($('.site-wrapper').attr('data-state') == 'slide-closed') {
    //display Nav when closed
    $('.site-wrapper').attr('data-state','slide-open');
  } else {
    //hide Nav when open
      $('.site-wrapper').attr('data-state','slide-closed');
  }
}
