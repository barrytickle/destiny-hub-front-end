$("#hamburger, .menu-bg").click(function(){
  if($(this).hasClass('menu-bg')){
    if(!$(this).parent().hasClass('active')){
      $(this).parent().toggleClass('active');
      $("html, body").toggleClass('no-move');
    }
  }else{
    $(this).parent().toggleClass('active');
    $("html, body").toggleClass('no-move');
    $(".menu > nav").toggleClass('menu-active');
    $(".main--nav").toggleClass('active');

    function animate(){
      $("nav a").each(function(i){
        setTimeout(function(){
          $("nav a").eq(i).toggleClass('fadeInLeft');
        }, 100 * (i + 1));
      });
    }
    setTimeout(animate, 0);
  }
});
