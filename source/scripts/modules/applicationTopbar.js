// Application Topbar Interaction

var $mobileTrigger = $('.application-topbar__mobile-trigger'),
    $mobileMenu = $('.application-topbar__mobile-menu'),
    active = 'active'

$mobileTrigger.on('click', function (e) {
  e.preventDefault();
  $(this).parents().siblings($mobileMenu).toggleClass(active);
});