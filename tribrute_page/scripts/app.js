
$(document).ready(function(){

$(this).find('.event-block').on("mouseover", function(){
		$(this).find('.timeline-years').addClass('timeline-selected');
	});


$(this).find('.event-block').on("mouseout", function(){
		$(this).find('.timeline-years').removeClass('timeline-selected');
	});

});