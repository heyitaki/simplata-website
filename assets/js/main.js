;(function ($) {
	"use strict";
	$(document).ready(function () {
		$('body').scrollspy({
			target: ".header-area",
			offset: 50
		});

		$('[data-toggle="tooltip"]').tooltip();

		$('.mainmenu').slicknav({
			label: '',
			duration: 500,
			prependTo: '',
			closedSymbol: '<i class="fa fa-angle-right"></i>',
			openedSymbol: '<i class="fa fa-angle-right"></i>',
			appendTo: '.header-area',
			menuButton: '.toggle',
			closeOnClick: 'true',
		});

		$(".toggle").on('click', function () {
			$(this).toggleClass("active");
		});

		var swiper = new Swiper('.gallery-slider', {
			autoplay: false,
			speed: 3000,
			effect: 'coverflow',
			loop: true,
			centeredSlides: true,
			slidesPerView: 3.5,
			coverflow: {
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: 1,
                slideShadows : false,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 1.5,
				},
				768: {
					slidesPerView: 2.5,
				},
				1000: {
					slidesPerView: 3.5,
				},
			}
		});


		$("#mainmenu-area").sticky({
			topSpacing: 0
		});

		new WOW().init({
			mobile: false,
		});

		$(".preloader").fadeOut("slow");

		$('#mc-form').ajaxChimp({
			url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&id=d0323b0697', //Set Your Mailchamp URL
			callback: function (resp) {
				if (resp.result === 'success') {
					$('.subscribe .input-box, .subscribe .bttn-4').fadeOut();
				}
			}
		});

		var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 1000
		});
		if (typeof Typed === 'function') {
			var typed = new Typed('.typing', {
				strings: ["Work Speed"],
				loop: true,
				typeSpeed: 50,
				backSpeed: 40,
			});
		}

		$('#html').LineProgressbar({
			percentage: 30,
			radius: '30px',
			height: '15px',
			fillBackgroundColor: '#DA4453',
            backgroundColor: '#7783C3',
		});

		$(".single-progress").on('mouseenter', function(){
			$(".single-progress").removeClass("active");
			$(this).addClass("active");
		});

		$(".servicedrop-1-items .single-c-item").hide();
		$(".servicedrop-1-items .use-case-link").hide();

		$(".servicedrop-2-items .single-c-item").hide();
		$(".servicedrop-2-items .use-case-link").hide();

		$(".servicedrop-3-items .single-c-item").hide();
		$(".servicedrop-3-items .use-case-link").hide();

		$('.servicedrop-1').on('click', function() {
			if ($(".servicedrop-1-arrow").hasClass('mdi-chevron-right')) {
				$(".servicedrop-1-arrow").addClass('mdi-chevron-down').removeClass('mdi-chevron-right');

				$(".servicedrop-1-items .single-c-item").fadeIn(500);
				$(".servicedrop-1-items .use-case-link").fadeIn(500);
			} else {
				$(".servicedrop-1-arrow").addClass('mdi-chevron-right').removeClass('mdi-chevron-down');

				$(".servicedrop-1-items .single-c-item").hide();
				$(".servicedrop-1-items .use-case-link").hide();
			}
		});

		$('.servicedrop-2').on('click', function() {
			if ($(".servicedrop-2-arrow").hasClass('mdi-chevron-right')) {
				$(".servicedrop-2-arrow").addClass('mdi-chevron-down').removeClass('mdi-chevron-right');

				$(".servicedrop-2-items .single-c-item").fadeIn(500);
				$(".servicedrop-2-items .use-case-link").fadeIn(500);
			} else {
				$(".servicedrop-2-arrow").addClass('mdi-chevron-right').removeClass('mdi-chevron-down');

				$(".servicedrop-2-items .single-c-item").hide();
				$(".servicedrop-2-items .use-case-link").hide();
			}
		});

		$('.servicedrop-3').on('click', function() {
			if ($(".servicedrop-3-arrow").hasClass('mdi-chevron-right')) {
				$(".servicedrop-3-arrow").addClass('mdi-chevron-down').removeClass('mdi-chevron-right');

				$(".servicedrop-3-items .single-c-item").fadeIn(500);
				$(".servicedrop-3-items .use-case-link").fadeIn(500);
			} else {
				$(".servicedrop-3-arrow").addClass('mdi-chevron-right').removeClass('mdi-chevron-down');

				$(".servicedrop-3-items .single-c-item").hide();
				$(".servicedrop-3-items .use-case-link").hide();
			}
		});



		$('#bar1').barfiller({
			barColor: '#F38550',
		});
		$('#bar2').barfiller({
			barColor: '#00C1B1',
		});
		$('#bar3').barfiller({
			barColor: '#1657E2',
		});

	});
})(jQuery);