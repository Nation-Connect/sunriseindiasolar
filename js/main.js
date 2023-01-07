/*
jQuery(document).ready(function() {
    
document.addEventListener("contextmenu", function (e) {e.preventDefault();}, false);

document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};

});

*/
(function($) {
    "use strict";

    if ($('.pxp-props-carousel-right-stage-1').length > 0) {
        $('.pxp-props-carousel-right-stage-1').owlCarousel({
            'nav': true,
            'dots': false,
			'autoPlay' : true,
			'interval' : 4000,
            'margin': 30,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 1,
                },
                900: {
                    'items': 1,
                    'stagePadding': 30
                },
                1200: {
                    'items': 1,
                    'stagePadding': 30
                },
                1600: {
                    'items': 1,
                    'stagePadding': 120
                }
            },
            'navText': ['',''],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }



    var heroPropCarouselItems = 1;

    $('.pxp-hero-props-carousel-1 .carousel-item').each(function(index, element) {
        if (index == 0) {
            $('.pxp-hero-props-carousel-1-prices').addClass('pxp-price-active pxp-first-time');
        }

        $('.pxp-hero-props-carousel-1-prices .pxp-carousel-ticker-counter').append('<span>0' + heroPropCarouselItems + '</span>');

        heroPropCarouselItems += 1;
    });

    $('.pxp-hero-props-carousel-1-prices .pxp-carousel-ticker-total').append('<span>0' + $('.pxp-hero-props-carousel-1 .carousel-item').length + '</span>');

    $('.pxp-hero-props-carousel-1').on('slide.bs.carousel', function(carousel) {
        $('.pxp-hero-props-carousel-1-prices').removeClass('pxp-first-time');
        $('.pxp-hero-props-carousel-1-prices').carousel(carousel.to);
    });

    $('.pxp-hero-props-carousel-1').on('slid.bs.carousel', function(carousel) {
        var tickerPos = (carousel.to) * 13;

        $('.pxp-hero-props-carousel-1-prices .pxp-carousel-ticker-counter > span').css('transform', 'translateY(-' + tickerPos + 'px)');
    });

    $('.pxp-hero-props-carousel-1 .pxp-carousel-control-next').click(function(e) { 
        $('.pxp-hero-props-carousel-1').carousel('next');
    });
    $('.pxp-hero-props-carousel-1 .pxp-carousel-control-prev').click(function(e) { 
        $('.pxp-hero-props-carousel-1').carousel('prev');
    });


})(jQuery);

! function($) {
	
	$.fn.meanmenu = function(e) {
        var n = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = $.extend(n, e);
        var a = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            var n = e.meanMenuTarget,
                t = e.meanMenuContainer,
                r = e.meanMenuClose,
                i = e.meanMenuCloseSize,
                s = e.meanMenuOpen,
                u = e.meanRevealPosition,
                m = e.meanRevealPositionDistance,
                l = e.meanRevealColour,
                o = e.meanScreenWidth,
                c = e.meanNavPush,
                v = ".meanmenu-reveal",
                h = e.meanShowChildren,
                d = e.meanExpandableChildren,
                y = e.meanExpand,
                j = e.meanContract,
                Q = e.meanRemoveAttrs,
                f = e.onePage,
                g = e.meanDisplay,
                p = e.removeElements,
                C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var w = "",
                x = function() {
                    if ("center" === u) {
                        var e = window.innerWidth || document.documentElement.clientWidth,
                            n = e / 2 - 22 + "px";
                        w = "left:" + n + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({
                            left: n
                        }) : jQuery(".meanmenu-reveal").css("left", n)
                    }
                },
                A = !1,
                E = !1;
            "right" === u && (w = "right:" + m + ";left:auto;"), "left" === u && (w = "left:" + m + ";right:auto;"), x();
            var M = "",
                P = function() {
                    M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s)
                },
                W = function() {
                    jQuery(".mean-bar,.mean-push").remove(), jQuery(t).removeClass("mean-container"), jQuery(n).css("display", g), A = !1, E = !1, jQuery(p).removeClass("mean-remove")
                },
                b = function() {
                    var e = "background:" + l + ";color:" + l + ";" + w;
                    if (o >= a) {
                        jQuery(p).addClass("mean-remove"), E = !0, jQuery(t).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var r = jQuery(n).html();
                        jQuery(".mean-nav").html(r), Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                        }), jQuery(n).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(n).hide(), jQuery(".meanmenu-reveal").show(), jQuery(v).html(s), M = jQuery(v), jQuery(".mean-nav ul").hide(), h ? d ? (jQuery(".mean-nav ul ul").each(function() {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="">' + y + "</a>")
                        }), jQuery(".mean-expand").on("click", function(e) {
                            e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(j), jQuery(this).prev("ul").slideDown(300, function() {})), jQuery(this).toggleClass("mean-clicked")
                        })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function(e) {
                            e.preventDefault(), A === !1 ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), A = !0) : (jQuery(".mean-nav ul:first").slideUp(), A = !1), M.toggleClass("meanclose"), P(), jQuery(p).addClass("mean-remove")
                        }), f && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                            jQuery(".mean-nav ul:first").slideUp(), A = !1, jQuery(M).toggleClass("meanclose").html(s)
                        })
                    } else W()
                };
            C || jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth, a > o, W(), o >= a ? (b(), x()) : W()
            }), jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth, C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()))
            }), b()
        })
    }
}(jQuery);

(function ($) {
"use strict";
var windows = $(window);
var sticky = $('.header-sticky');
windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 200) {
        sticky.removeClass('is-sticky');
    }else{
       sticky.addClass('is-sticky');
    }
});

var mainMenuNav = $('.main-menu');
mainMenuNav.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '0',
});

})(jQuery);	


$(document).ready(function(){
	
$(".banner").owlCarousel({
navigation: true,
pagination: false,
loop: true,
items: 1,
autoPlay : 3000,
itemsDesktop : [1199,1],
itemsDesktopSmall : [980,1],
itemsTablet: [768,1],
itemsTabletSmall: false,
itemsMobile : [479,1],
navigationText: [
"<i class='fa fa-arrow-left'></i>",
"<i class='fa fa-arrow-right'></i>"
],
});



		$(".owl-testimonial").owlCarousel({
			items:1,
			loop:true,
			nav:false,
			center:true,
			dots:true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:false,
			itemsDesktop : [1199,1],
itemsDesktopSmall : [980,1],
itemsTablet: [768,1],
itemsTabletSmall: false,
itemsMobile : [479,1],
			smartSpeed:450
	  	});

		      $(".popular").owlCarousel({
            loop:true,
            nav:true,
            center:false,
            dots:true,
            autoplay:true,
            autoplayTimeout:1000,
            margin:5,
            autoplayHoverPause:true,
            smartSpeed:450,
            responsive:{
            375:{
                items:2
            },
            640:{
                items:2
            },
            768:{
                items:1
            },
            1024:{
                items:3
            }
           }
        });



})


plugins = {lightGallery: $("[data-lightgallery='group']"),};
$(document).ready(function () {
function initLightGallery(itemsToInit, addClass) {
$(itemsToInit).lightGallery({
thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
selector: "[data-lightgallery='item']",
autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
pause: parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
addClass: addClass,
mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
loop: $(itemsToInit).attr("data-lg-loop") !== "false"
});
}
if (plugins.lightGallery.length) {
for (var i = 0; i < plugins.lightGallery.length; i++) {
initLightGallery(plugins.lightGallery[i]);
}
}

});

$( document ).ready(function() {

		var dateFormat = "mm/dd/yy",
			from = $( "#checkin" )
				.datepicker({
					defaultDate: "+1w",
					changeMonth: true,
					minDate:0,
					numberOfMonths: 1
				})
				.on( "change", function() {
					to.datepicker( "option", "minDate", getDate( this ) );
				}),
			to = $( "#checkout" ).datepicker({
				defaultDate: "+1w",
				changeMonth: true,
				minDate:0,
				numberOfMonths: 1
			})
			.on( "change", function() {
				from.datepicker( "option", "maxDate", getDate( this ) );
			});

		function getDate( element ) {
			var date;
			try {
				date = $.datepicker.parseDate( dateFormat, element.value );
			} catch( error ) {
				date = null;
			}

			return date;
		}

	

		var dateFormat = "mm/dd/yy",
			from = $( "#traveldatefrom" )
				.datepicker({
					defaultDate: "+1w",
					changeMonth: true,
					minDate:0,
					numberOfMonths: 1
				})
				.on( "change", function() {
					to.datepicker( "option", "minDate", getDate( this ) );
				}),
			to = $( "#traveldateto" ).datepicker({
				defaultDate: "+1w",
				changeMonth: true,
				minDate:0,
				numberOfMonths: 1
			})
			.on( "change", function() {
				from.datepicker( "option", "maxDate", getDate( this ) );
			});

		function getDate( element ) {
			var date;
			try {
				date = $.datepicker.parseDate( dateFormat, element.value );
			} catch( error ) {
				date = null;
			}

			return date;
		}




});


