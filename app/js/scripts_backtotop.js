$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  var pxScrolled = 200;
  var duration = 500;

  $(window).scroll(function() {
    if ($(this).scrollTop() > pxScrolled) {
      $('.fab-container').css({'bottom': '0px', 'transition': '.3s'});
      $(".hamburger-container").css({'bottom': '70px'});

    } else {
      $('.fab-container').css({'bottom': '-72px'});
      $(".hamburger-container").removeAttr('style');
    }
  });

  $('.top').click(function() {
    $('html, body').animate({scrollTop: 0}, duration);
  })
