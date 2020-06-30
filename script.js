// buttonSet1
$( function() {

  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( 'Hello World!' );
  });

  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': 'black',
      'background-color': 'blue'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://www.kyusan-u.ac.jp">zoukei tanki university</a></p>' );
    $( 'footer a' ).css( 'color','white' );
  });

});

// buttonSet2
$( function() {

  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });

  $( '#buttonUpdown' ).click( function() {
    $('main').css( 'flex-direction','column-reverse' );
  });


});
