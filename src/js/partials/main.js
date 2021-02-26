$(document).ready(function () {
	// $("input[name='phone']").mask(" +7 (999) 999-99-99");

	var image = $('.js-image-map > img');
	image.mapster({
		isSelectable: false,
		fillColor: 'ff0000',
		fillOpacity: 0.5
	});

	var resizing;
	var resize = function() {
		if (resizing) return;
		resizing=true;
		image.mapster('resize',$('.js-image-map').width(),0,0);
		resizing=false;
	};
	$(window).bind('resize',resize);

	$('.js-freeoff-controller').click(function () {
		var idx = $(this).index();
		$('.freeoff-tab').eq(idx).addClass('freeoff-tab--active').siblings('.freeoff-tab--active').removeClass('freeoff-tab--active');
		$(this).addClass('freeoff-tab-controls__item--active').siblings('.freeoff-tab-controls__item--active').removeClass('freeoff-tab-controls__item--active');

		$('.js-image-overlay img').eq(idx).addClass('active').siblings('.active').removeClass('active');
	});

	$('.js-image-map map area').click(function () {
		event.preventDefault();
		var idx = $(this).index();
		$('.freeoff-tab').eq(idx).addClass('freeoff-tab--active').siblings('.freeoff-tab--active').removeClass('freeoff-tab--active');
		$('.js-freeoff-controller').eq(idx).addClass('freeoff-tab-controls__item--active').siblings('.freeoff-tab-controls__item--active').removeClass('freeoff-tab-controls__item--active');

		$('.js-image-overlay img').eq(idx).addClass('active').siblings('img').removeClass('active');
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

	const observer = lozad();
	observer.observe();

	$('.js-gallery-more').click(function (e) {
		e.preventDefault();
		var btn=$(this);
		//console.log(more_pics_offset);
		//console.log(more_pics);


		var str='';
		for(i=0;i<9;++i){
			if(more_pics_offset+i<more_pics.length){
				var idx=more_pics_offset+i;
				str+='<a class="gallery-page__link-img photo-gallery" href="'+more_pics[idx]+'" data-fancybox="images" data-caption="'+more_pics_captions[idx]+'"><div class="gallery-page__link-desc">'+more_pics_captions[idx]+'</div><img class="gallery-page__img" alt="'+more_pics_alts[idx]+'" src="'+more_pics_thumbnails[idx]+'"></a>';
			}
			else{
				btn.remove();
				break;
			}
		}

		$(more_pics_target).append(str);

		//observer.observe();
		more_pics_offset+=9;

		if(more_pics_offset+1>=more_pics.length){
			btn.remove();
		}

	});

	if($('.gallery-page'.length>0)){
		$("a.gallery-photo").fancybox();
		var defaults = {
			arrows: true,
		}
	}






});


