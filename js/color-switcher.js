
$(document).ready(function() {
	var CSduration = 500;
	$('#color-switcher > ul > li').tooltip();
	
	$('#toggle-switcher').click(function(){
		if($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$(this).find('i').removeClass('fa-times');
			$(this).find('i').addClass('fa-gear');
			$('#color-switcher').animate({'right':'-231px'},CSduration);
		}
		else {
			$(this).addClass('opened')
			$(this).find('i').removeClass('fa-gear');
			$(this).find('i').addClass('fa-times');
			$('#color-switcher').animate({'right':'-10px'},CSduration);
		}
	}); 
	
	$('#color-switcher > ul > li').click(function() {
		$("body").removeClass();
		$("body").addClass("color-" + $(this).attr("id"));
	});
	
	$('#page-boxed-toggle').click(function() {
        $('#page-wrapper').toggleClass("page-boxed");
		$(this).toggleClass("active");
		
		var owl = $(".owl-carousel").data('owlCarousel');
		owl.reinit();
		
    });
	
});



