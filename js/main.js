//waves effect
(function() {

  var viewWidth, xPos;

  viewWidth = -1 * $(window).width();
  xPos = 0;

  $(document).on('scroll', function() {

    if (xPos > viewWidth) {
      xPos -= 20;
    } else {
      xPos = 0;
    }

    $('#svg').css('left', xPos);
  });

}());

////////////////////
// Automate Animation
////////////////////

(function() {

  var obj, scrollToThis, interval;

  obj = $('body');
  scrollToThis = obj.height();

  function scroll(callback) {

    obj.animate({
      scrollTop: 0
    }, 2000);
  }
  
  obj.scrollTop(obj.height());
  scroll();

}());
//waves end

  //smooth scrolling   
    $(function() {
    $('.smoothScroll a[href*="#"]:not([href="#"])').on('click',function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
        if($(window).width() > 1169){
            $('html, body').animate({
              scrollTop: target.offset().top - 72
            }, 1000);
            return false;
        } else {
          $('html, body').delay(200).animate({
              scrollTop: target.offset().top - 72
            }, 1000);
            return false;
        }
        }
      }
    });
  });

  //sticky headbar logo change
  $(function() {
    var header = $(".siteHeader");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }
    });
});