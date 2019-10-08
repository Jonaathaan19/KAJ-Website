$(document).ready(function () {
    $('#responsive').lightSlider({

        item: 3,
        loop: true,
        thumbItem: 9,
        enableDrag: false,
        currentPagerPosition: 'middle',
        slideMargin: 75,


        responsive: [{
                breakpoint: 993,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 40,

                }
            },
            {
                breakpoint: 769,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 10,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
        ],

        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#responsive .lslide'
            });
        }
    });

    

    $('#responsive').lightGallery({
        download: false,
        speed: 600,
        enableDrag: true,
        thumbnail: true,
    }); 



    AOS.init({

    });

    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    

    $(function () {
        var scroll = new SmoothScroll('a[href*="#section-"]');
    });

});