$(window).load(function() {
  $('.nav-primary > li').each(function() {
    var anchospan = $(this).children("a").children("span").width();
  //  var anchospan2 = $(this).children("a").children("span").width()/2;

    $(this).children("a").children("span").css( "width", anchospan );
    $(this).children("a").children("span").css( "left", ("77" - anchospan)/2 );
  });



  $( ".nav-primary > li > a" ).click(function() {

    if ( $(".nav-primary").hasClass( "opened" ) ) {


    $(this).parent().siblings().children("ul").slideUp(500);

      $(this).parent().children("ul").slideToggle(500);



      if ( $(this).parent().hasClass( "expanded" ) ) {

        $(this).parent().removeClass("expanded");

      }
      else {

        $( ".nav-primary > li" ).removeClass("expanded");
        $(this).parent().addClass("expanded");
      }

    }
    else {
      $(".nav-primary").removeClass("closed");
      $(".nav-primary").addClass("opened");

      $(".nav-primary > li").removeClass("expanded");
      $(".nav-primary > li > ul").hide();
      $(this).parent().children("ul").delay(500).slideToggle(500);
      $(this).parent().addClass("expanded");
    }


  });

  $( ".nav-primary > .bt-close" ).click(function() {
    setTimeout(function(){
      $(".nav-primary").removeClass("opened");
      $(".nav-primary").addClass("closed");
    }, 500);



    $(".nav-primary > li").removeClass("expanded");
    $(".nav-primary > li > ul").slideUp(500);
  //    $(".nav-primary > li > ul").hide();
  //    $(this).children("ul").delay(500).slideToggle(500);
  //    $(this).addClass("expanded");



  });


});
