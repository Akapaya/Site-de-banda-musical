$(document).ready(function() {

     $(window).scroll(function() {
     	if ($(document).scrollTop() >= 150) {
     		$('#oi3').addClass('menufixo');
     	} 
     	else {
     		$('#oi3').removeClass("menufixo")
     	}
     });
});