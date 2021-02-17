
$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-menu').toggleClass('sh-menu--active');
		$('html, body').toggleClass('body--menu-open');
	});

});