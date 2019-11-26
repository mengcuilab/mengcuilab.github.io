
$(document).ready(function() {

/* -----------------------------------
 * 		Mobile Navigation
 * -----------------------------------*/

  $(".nav_icon").on("click", function() {
	if($( ".nav_main" ).hasClass( "mobile-hide" )){
	  	$( ".nav_main" ).removeClass( "mobile-hide" );
	  	$( ".nav_main" ).addClass( "mobile-show" );
	}else{
	  	$( ".nav_main" ).addClass( "mobile-hide" );
	  	$( ".nav_main" ).removeClass( "mobile-show" );
	} 
  });

});
