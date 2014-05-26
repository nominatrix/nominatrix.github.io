jQuery(function($){
  $('.background').parallax();

  $('.nav a').click(function(e){
    var $el = $(this.hash);
    if($el.length) {
      e.preventDefault();
      $.scrollTo($el, {
        axis:     'y',
        duration: 500
      });
    }
  });
});
