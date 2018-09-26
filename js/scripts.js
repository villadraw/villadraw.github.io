/*
|----------------------------------------------------------------------------
	Coming Soon Style 2 JS
	Author: Envalab
	Version: 1.0
|----------------------------------------------------------------------------
*/

jQuery(window).on('load', function(){

	// PRELOADER
	jQuery(".preloader-wrap").fadeOut(1000);


}); // end window load function

(function ($) {
	"use strict";

	/*
	|-----------------------------------------------------
	|	CONTROL Countdown box display
	|-----------------------------------------------------
	*/
	// Make 'false' to hide (top-bottom).
	var display_till_years		= false;
	var display_till_months 	= false;
	var display_till_days		= true;
	var display_till_hours		= true;
	var display_till_minutes	= true;
	var display_till_seconds	= true;

	// Hide Hour, Min, Sec boxes
	var hide_hr_min_sec			= 'no'; // make 'yes' to hide Hour, Min, Sec boxes

	/*
	|-----------------------------------------------------
	|	Countdown JS
	|-----------------------------------------------------
	*/
	var userDate = new Date($("#count-down-date").val()).getTime();
	function countDown(){

		var frontYears 		= $( '.years' );
		var frontMonths 	= $( '.months' );
		var frontDays 		= $( '.days' );
		var frontHours		= $( '.hours' );
		var frontminutes	= $( '.minutes' );
		var frontSeconds	= $( '.seconds' );
		var expiredText		= $( '.expired-text' );
		var countDownUl		= $( '.count-down-list' );

		var d = new Date();
		
		var days = d.getDate();
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();

		$('#days').show();
		$('#hours').show();
		$('#minutes').show();
		$('#seconds').show();

	

	
		if(days < 10){days = "0" + days;}
		if(hours < 10){hours = "0" + hours;}
		if(minutes < 10){minutes = "0" + minutes;}
		if(seconds < 10) {seconds = "0" + seconds;}

	
		$(frontDays).text(days);
		$(frontHours).text(hours);
		$(frontminutes).text(minutes);
		$(frontSeconds).text(seconds);
		var countd = setInterval(function(){
			countDown();
		}, 1000);

	}
  
	countDown();

    /* =================================
    ===  CONTACT FORM  - Popup      ====
    =================================== */
    $("#popup-contact-form").on('submit', function(e) {
        e.preventDefault();
        var name = $("#popup_name").val();
        var email = $("#popup_email_address").val();
        var message = $("#popup_message").val();
        var dataString = 'name=' + name + '&email=' + email + '&message=' + message;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "php/sendmail.php",
                data: dataString,
                success: function() {
                    $('#popup-contact-form .success').fadeIn(1000);
                    $('#popup-contact-form .error').fadeOut(500);
                    $("#popup-contact-form")[0].reset();
                }
            });
        } else {
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }

        return false;
    });

}(jQuery));