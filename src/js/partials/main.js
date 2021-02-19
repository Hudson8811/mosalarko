$(document).ready(function () {
			// $("input[name='phone']").mask(" +7 (999) 999-99-99");

			$('.js-freeoff-controller').click(function () {
				var idx = $(this).index();
				$('.freeoff-tab').eq(idx).addClass('freeoff-tab--active')
					.siblings('.freeoff-tab--active').removeClass('freeoff-tab--active');
				$(this).addClass('freeoff-tab-controls__item--active')
					.siblings('.freeoff-tab-controls__item--active').removeClass('freeoff-tab-controls__item--active');
			});

			$('.js-captab-head-controller').click(function () {
				var idx = $(this).index();
				$('#captab-main').attr('data-active-col', idx + 1);

				$(this).addClass('captab-head-controller--active')
					.siblings('.captab-head-controller--active').removeClass('captab-head-controller--active');
			});

			if ($('.js-czphotos-slider').length > 0) {
				$('.js-czphotos-slider').slick({
						infinite: true,
						speed: 300,
						centerMode: true,
						slidesToShow: 1,
						variableWidth: true,
						lazyLoad: 'ondemand',
						prevArrow: '<div class="czphotos-arrow czphotos-arrow--prev"><div class="czphotos-arrow-inner"></div></div>',
						nextArrow: '<div class="czphotos-arrow czphotos-arrow--next"><div class="czphotos-arrow-inner"></div></div>',
						responsive: [{
								breakpoint: 850,
								settings: {
									centerMode: false,
									variableWidth: false
								}
							}]
						});
				}
				$('[data-fancybox]').fancybox({
					backFocus: false,
				});


				$('.js-czphotos-controller').click(function () {
					var idx = $(this).index();
					$('.czphotos-tab').eq(idx).addClass('czphotos-tab--active')
						.siblings('.czphotos-tab--active').removeClass('czphotos-tab--active');
					$('.czphotos-tab').find('.js-czphotos-slider').slick('refresh');
					$(this).addClass('freeoff-tab-controls__item--active')
						.siblings('.freeoff-tab-controls__item--active').removeClass('freeoff-tab-controls__item--active');
				});

			});