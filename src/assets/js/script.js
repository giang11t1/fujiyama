$(document).ready(function() {
	var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: false,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    // owl-carousel=====
    var owl = $("#owl-slide");
    owl.owlCarousel({
    	itemsCustom : [
	        [320,1],
	        [360, 1],
	        [375, 1],
	        [414, 1],
	        [568, 3],
	        [600, 3],
	        [900,3],
	        [1024, 4],
	      ],
        navigation: true,

        navigationText: ["◀ Left <strong>arrow</strong>", "Right <strong>arrow</strong> ▶"]
    });
    // =====
    function myfunction() {
        if (this.itemsAmount > this.visibleItems.length) {
            $('.next').show();
            $('.prev').show();

            $('.next').removeClass('disabled');
            $('.prev').removeClass('disabled');
            if (this.currentItem === 0) {
                $('.prev').addClass('disabled');
            }
            if (this.currentItem === this.maximumItem) {
                $('.next').addClass('disabled');
            }

        } else {
            $('.next').hide();
            $('.prev').hide();
        }

        var $widthContainer = $(".container").width();

        var $widthNextPre = $(".next-pre").innerWidth();
        var $widthSlider = $widthContainer - $widthNextPre - 30;
        $(".slider").width($widthSlider);
    }
    //
    var owl = $("#owl-demo");
    owl.owlCarousel({
        items: 7, //10 items above 1000px browser width
        autoWidth: true,
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        afterAction: myfunction
    });

    var owl1 = $("#owl-demo1");
    owl1.owlCarousel({
        items: 7, //10 items above 1000px browser width
        autoWidth: true,
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        afterAction: myfunction
    });

    $(".next").click(function() {
        owl.trigger('owl.next');
        $(".next-pre .prev").css("display", "inline-block ");
        var $widthContainer = $(".container").width();

        var $widthNextPre = $(".next-pre").innerWidth();
        var $widthSlider = $widthContainer - $widthNextPre - 30;
        $(".slider").width($widthSlider);

    });
    $(".prev").click(function() {
        owl.trigger('owl.prev');
        $(".next-pre .next").css("display", "inline-block ");
        var $widthContainer = $(".container").width();

        var $widthNextPre = $(".next-pre").innerWidth();
        var $widthSlider = $widthContainer - $widthNextPre - 30;
        $(".slider").width($widthSlider);
    });
        // scroll==
    $(function() {
        if ($(".scrollbar").length > 0) {
            $(".scrollbar").mCustomScrollbar();
            $('.all-box-check').mCustomScrollbar();
        }
    });

    $(function() {
        $('nav#menu').mmenu();
    });

    $('.menu-slick').dragOn();
});
