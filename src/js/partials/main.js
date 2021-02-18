$(document).ready(function () {
	// $("input[name='phone']").mask(" +7 (999) 999-99-99");

	$('.js-freeoff-controller').click(function () {
		var idx = $(this).index();
		$('.freeoff-tab').eq(idx).addClass('freeoff-tab--active')
			.siblings('.freeoff-tab--active').removeClass('freeoff-tab--active');
		$(this).addClass('freeoff-tab-controls__item--active')
			.siblings('.freeoff-tab-controls__item--active').removeClass('freeoff-tab-controls__item--active');
	});
});