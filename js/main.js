$(document).ready(function(){

	var windowObjectReference;

	$("#navigation").load('navigation.html');
	$("#footer").load('footer.html');
	$("#success").hide();
	$("#danger").hide();

	$("#contact-form").validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			subject: "required",
			msg: "required"
		},
		messages : {
			name: "Please enter your name",
			email: "Please enter a valid email address",
			subject: "Please enter subject for your message",
			message: "Please enter your message for me"
		},
		highlight: function ( element, errorClass, validClass ) {
					$( element ).parents( ".col-sm-10" ).addClass( "has-error" ).removeClass( "has-success" );
		},
		unhighlight: function (element, errorClass, validClass) {
					$( element ).parents( ".col-sm-10" ).addClass( "has-success" ).removeClass( "has-error" );
		}
	});



});
