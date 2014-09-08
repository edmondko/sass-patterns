$(document).ready(function($) {


	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});

	$('.animations').find('.btn').on('click', function() {
		loadAnimation(this);
	});

	function loadAnimation (elem) {
		var animationClass = 'animated '+ $(elem).text();
		$(elem).addClass(animationClass).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$(elem).removeClass(animationClass);
		});
	}


	var stickyNavTop = $('#stickyHeader').offset().top;
	function stickyNav(){
		var scrollTop = $(window).scrollTop();
		var headerHeight = $('#stickyHeader').outerHeight();
		if (scrollTop > stickyNavTop) {
			$('#stickyHeader').addClass('sticky');
			$('body').css('paddingTop', headerHeight);
			$('#mainNav').removeClass("center").addClass("right");
		} else {
			$('#stickyHeader').removeClass('sticky');
			$('body').css('paddingTop', 0);
			$('#mainNav').removeClass("right").addClass("center");
		}
	};

	/* Main Nav links scrolling the page */
	var target, scroll;

   	$("a[href*=#]:not([href=#])").on("click", function(e) {
	   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		   target = $(this.hash);
		   target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

		   if (target.length) {
			   if (typeof document.body.style.transitionProperty === 'string') {
				   e.preventDefault();

				   var avail = $(document).height() - $(window).height();

				   scroll = target.offset().top - 80;

				   if (scroll > avail) {
					   scroll = avail;
				   }

				   $("html").css({
					   "margin-top" : ( $(window).scrollTop() - scroll ) + "px",
					   "transition" : "0.6s ease-out"
				   }).data("transitioning", true);
			   } else {
				   $("html, body").animate({
					   scrollTop: scroll
				   }, 600);
				   return;
			   }
		   }
	   }
   });

   $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function (e) {
	   if (e.target == e.currentTarget && $(this).data("transitioning") === true) {
		   $(this).removeAttr("style").data("transitioning", false);
		   $("html, body").scrollTop(scroll);
		   return;
	   }
   });


});