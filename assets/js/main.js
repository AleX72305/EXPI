
(function ($) {

	$('.select').each(function () {
		const _this = $(this),
			selectOption = _this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			duration = 300; // длительность анимации 

		_this.hide();
		_this.wrap('<div class="select"></div>');
		$('<div>', {
			class: 'new-select',
			text: 'Belarus'
		}).insertAfter(_this);

		const selectHead = _this.next('.new-select');
		$('<div>', {
			class: 'new-select__list'
		}).insertAfter(selectHead);

		const selectList = selectHead.next('.new-select__list');
		for (let i = 0; i < selectOptionLength; i++) {
			$('<div>', {
				class: 'new-select__item',
				html: $('<span>', {
					text: selectOption.eq(i).text()
				})
			})
				.attr('data-value', selectOption.eq(i).val())
				.attr('data-disabled', selectOption.eq(i).attr('disabled'))
				.appendTo(selectList);

		}

		const selectItem = selectList.find('.new-select__item');
		selectList.slideUp(0);
		selectHead.on('click', function () {
			if (!$(this).hasClass('on')) {
				$(this).addClass('on');
				$(this).parent('.select').addClass('active');
				selectList.slideDown(duration);
				selectItem.on('click', function (e) {
					let disabled = $(this).attr('data-disabled');
					if (disabled != 'disabled') {
						let chooseItem = $(this).data('value');
						$('select').val(chooseItem).attr('selected', 'selected');
						selectHead.text($(this).find('span').text());
						selectList.slideUp(duration);
						selectHead.removeClass('on');
						selectHead.parent('.select').removeClass('active');
					}
				});
			} else {
				$(this).removeClass('on');
				$(this).parent('.select').removeClass('active');
				selectList.slideUp(duration);
			}
		});

	});


	$(".new-select__list .new-select__item").each(function () {
		let disabled = $(this).attr('data-disabled');
		if (disabled == 'disabled') {
			$(this).addClass('active');
		}
	});


	$('.click-menu').on('click', function () {
		if ($(this).hasClass('active')) {
			// console.log('111');
			$('.click-menu').removeClass('active');
			$('.menu-checkbox').removeClass('active');
		} else {
			// console.log('222');
			$('.click-menu').removeClass('active');
			$('.menu-checkbox').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.click').find('.menu-checkbox').addClass('active');
		}
	});


	$('.menu-filter').on('click', function () {
		$('.open-slide-menu').addClass('active');
		$('body').addClass('none-filter');
	});

	$('.closes').on('click', function () {
		$('.open-slide-menu').removeClass('active');
		$('body').removeClass('none-filter');
	});

	$('.open-menu').on('click', function () {
		$('.slide-mobile-menu').addClass('active');
		$('body').addClass('none');
	});

	$('.close').on('click', function () {
		$('.slide-mobile-menu').removeClass('active');
		$('body').removeClass('none');
	});

	$('.category-slider').slick({
		arrows: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 1367,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			}
		],
		appendArrows: $('.slider-navigation'),
		prevArrow: `<span class="prev"><svg width="24" height="52" viewBox="0 0 24 52" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 1L2 26L22 51" stroke="#14420D" stroke-width="3"/>
		</svg>
		</span>`,
		nextArrow: `<span class="next"><svg width="24" height="52" viewBox="0 0 24 52" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 1L22 26L2 51" stroke="#14420D" stroke-width="3"/>
		</svg>
		</span>`,
	});

	$('.slider').slick({
		arrows: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 1367,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
				}
			}
		],
		appendArrows: $('.arrows'),
		prevArrow: `<span class="prev"><svg width="24" height="52" viewBox="0 0 24 52" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 1L2 26L22 51" stroke="#14420D" stroke-width="3"/>
		</svg>
		</span>`,
		nextArrow: `<span class="next"><svg width="24" height="52" viewBox="0 0 24 52" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 1L22 26L2 51" stroke="#14420D" stroke-width="3"/>
		</svg>
		</span>`,
	});

	$('.showrooms-slide').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
	});

	$('#cards-number').keyup(function () {
		var foo = $(this).val().split(" ").join(""); // remove hyphens
		if (foo.length > 0) {
			foo = foo.match(new RegExp('.{1,4}', 'g')).join(" ");
		}
		$(this).val(foo);
	});

	$('#month').keyup(function () {
		var foo = $(this).val().split("/").join(""); // remove hyphens
		if (foo.length > 0) {
			foo = foo.match(new RegExp('.{1,2}', 'g')).join("/");
		}
		$(this).val(foo);
	});

})(jQuery);
