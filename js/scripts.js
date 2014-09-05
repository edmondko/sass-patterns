$(document).ready(function($) {


	$('.animations').find('.btn').on('click', function() {
		loadAnimation(this);
	});

	function loadAnimation (elem) {
		var animationClass = 'animated '+ $(elem).text();
		$(elem).addClass(animationClass).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$(elem).removeClass(animationClass);
		});
	}
});