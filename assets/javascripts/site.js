jQuery(function($){
  $('.background').parallax();

  $('.navbar').on('click', 'a', function(e){
    var hash = this.hash;
    var $el = $(hash);
    if($el.length) {
      e.preventDefault();
      $.scrollTo($el, {
        axis:     'y',
        duration: 500,
        onAfter:  function(){
          document.location.hash = hash;
        }
      });
    }
  });
});
