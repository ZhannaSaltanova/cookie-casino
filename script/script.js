$(document).ready(function() {
    $('.burger-button').on('click', function(e) {
      e.preventDefault();  
      $('.burgermenu').toggleClass('burgermenu_active');
    });
  
    $('.close').on('click', function(e) {
      e.preventDefault();
      $('.burgermenu').removeClass('burgermenu_active');
    });
  });