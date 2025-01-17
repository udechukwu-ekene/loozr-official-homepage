
jQuery(function () {

    "use strict";


    jQuery( ".hamenu .main-menu >li" ).each(function(index) {
       jQuery(this).find('>.o-hidden .nm').html('0'+(index+1)+'.');
        jQuery(this).find( ">div>ul >li" ).each(function(index1) {
            jQuery(this).find('>.o-hidden .nm').html('0'+index1+'.');
        });

    });



    /* ===============================  Navbar Menu  =============================== */

    var wind = jQuery(window);

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = jQuery(".navbar"),
            logo_dark = jQuery(".navbar .logo> img.logo-dark"),
            logo_light = jQuery(".navbar .logo> img.logo-light");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");
            //logo.attr('src', 'img/logo-dark.png');
            logo_dark.removeClass('hide');
            logo_light.addClass('hide');
        } else {

            navbar.removeClass("nav-scroll");
            //logo.attr('src', 'img/logo-light.png');
            logo_light.removeClass('hide');
            logo_dark.addClass('hide');
        }
    });

    jQuery('.navbar .search .icon').on('click', function () {
        jQuery(".navbar .search .search-form").fadeIn();
    });

    jQuery('.navbar .search .search-form .close').on('click', function () {
        jQuery(".navbar .search .search-form").fadeOut();
    });


    function noScroll() {
        window.scrollTo(0, 0);
    }

   /* wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = jQuery(".topnav");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });*/

    var open = false,
        navDark = jQuery(".topnav.dark"),
        logoChanDark = jQuery(".topnav.dark .logo img.logo-dark"),
        logoChanLight = jQuery(".topnav.dark .logo img.logo-light");

    jQuery('.topnav .menu-icon').on('click', function () {
        open = !open;

        jQuery('.hamenu').toggleClass("open");

        if (open) {

            jQuery('.hamenu').animate({ left: 0 });

            jQuery('.topnav .menu-icon .text').addClass('open');

            navDark.addClass("navlit");
            //logoChan.attr('src', 'img/logo-light.png');
            logoChanLight.removeClass('hide');
            logoChanDark.addClass('hide');

            window.addEventListener('scroll', noScroll);

        } else {

            jQuery('.hamenu').delay(300).animate({ left: "-100%" });

            jQuery('.topnav .menu-icon .text').removeClass('open');

            navDark.removeClass("navlit");
            //logoChan.attr('src', 'img/logo-dark.png');
            logoChanDark.removeClass('hide');
            logoChanLight.addClass('hide');


            window.removeEventListener('scroll', noScroll);
        }
    });

    jQuery('.hamenu .menu-links .main-menu > li').on('mouseenter', function () {
        jQuery(this).css("opacity", "1").siblings().css("opacity", ".5");
    });

    jQuery('.hamenu .menu-links .main-menu > li').on('mouseleave', function () {
        jQuery(".hamenu .menu-links .main-menu > li").css("opacity", "1");
    });


    jQuery('.main-menu > li .dmenu').on('click', function () {
        jQuery(".main-menu").addClass("gosub");
        jQuery(this).parent().parent().find(".sub-menu").addClass("sub-open");
    });

    jQuery('.main-menu .sub-menu li .sub-link.back').on('click', function () {
        jQuery(".main-menu").removeClass("gosub");
        jQuery(".main-menu .sub-menu").removeClass("sub-open");
    });

    /* ===============================  skills-circle  =============================== */

    var c4 = jQuery('.skills-circle .skill');
    var myVal = jQuery(this).attr('data-value');

    jQuery(".skills-circle .skill").each(function () {

        c4.circleProgress({
            startAngle: -Math.PI / 2 * 1,
            value: myVal,
            thickness: 2,
            size: 110,
            fill: { color: "#75dab4" }
        });

    });

    wind.on('scroll', function () {
        jQuery(".skill-progress .progres").each(function () {
            var bottom_of_object =
                jQuery(this).offset().top + jQuery(this).outerHeight();
            var bottom_of_window =
                jQuery(window).scrollTop() + jQuery(window).height();
            var myVal = jQuery(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                jQuery(this).css({
                    width: myVal
                });
            }
        });
    });


    /* ===============================  countUp  =============================== */

    jQuery('.number-sec .count').countUp({
        delay: 10,
        time: 500
    });


    /* ===============================  tooltip  =============================== */

    jQuery('[data-tooltip-tit]').hover(function () {
        jQuery('<div class="div-tooltip-tit"></div>').text(jQuery(this).attr('data-tooltip-tit')).appendTo('body').fadeIn('slow');
    }, function () {
        jQuery('.div-tooltip-tit').remove();
    }).mousemove(function (e) {
        jQuery('.div-tooltip-tit').css({ top: e.pageY + 10, left: e.pageX + 20 })
    });
    jQuery('[data-tooltip-sub]').hover(function () {
        jQuery('<div class="div-tooltip-sub"></div>').text(jQuery(this).attr('data-tooltip-sub')).appendTo('body').fadeIn('slow');
    }, function () {
        jQuery('.div-tooltip-sub').remove();
    }).mousemove(function (e) {
        jQuery('.div-tooltip-sub').css({ top: e.pageY + 60, left: e.pageX + 20 })
    });

});


    /* ===============================  Wow Animation  =============================== */

    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();


// === window When Loading === //

jQuery(window).on("load", function () {

    /* ===============================  SPLITTING TEXT  =============================== */

    // Splitting();

});



/* ===============================  Hide / show navbar  =============================== */

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('#navi').outerHeight();
jQuery(window).on("scroll", function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = jQuery(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        jQuery('#navi').css('top', '-100px');

    } else {

        if (st + jQuery(window).height() < jQuery(document).height()) {
            jQuery('#navi').css('top', '0');
        }
    }

    lastScrollTop = st;
}



/* ===============================  Preloader page  =============================== */

/* ===============================  Scroll back to top  =============================== */

jQuery(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = jQuery(window).scrollTop();
        var height = jQuery(document).height() - jQuery(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    jQuery(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })


});


/* ===============================  Mouse effect  =============================== */

function mousecursor() {
    if (jQuery("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, jQuery("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), jQuery("body").on("mouseleave", "a, .cursor-pointer", function () {
            jQuery(this).is("a") && jQuery(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
};

jQuery(function () {
    mousecursor();
});

 /* ===============================  fixed-slider  =============================== */

jQuery(function () {

    "use strict";

    var slidHeight = jQuery(".fixed-slider").outerHeight();

    jQuery(".main-content").css({
        marginTop: slidHeight
    });

});

jQuery(window).scroll(function () {

    /* ===============================  fade slideshow  =============================== */

    var scrolled = jQuery(this).scrollTop();
    jQuery('.fixed-slider .caption , .fixed-slider .capt .parlx').css({
        'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)',
        'opacity': 1 - scrolled / 600
    });

});

 