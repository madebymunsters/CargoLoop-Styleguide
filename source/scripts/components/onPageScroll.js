$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('is-active');
    });

    $(this).addClass('is-active');
      var target = this.hash,
          menu = target;

      $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();

  $('.application-topbar__right .application-top__scroll-link').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.application-topbar__right ul li .application-top__scroll-link').removeClass("application-topbar__link--active");
      currLink.addClass("application-topbar__link--active");
    }
    else{
      currLink.removeClass("application-topbar__link--active");
    }
  });
};