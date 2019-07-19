$(document).ready(function() {
    // toggler button
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('change');
    });
    // sticky navbar
    $(document).scroll(function() {
        let position = $(this).scrollTop();
        //console.log(position);
        if(position >= 718) {
            $('.navbar').addClass('navbar-background');
        } else {
            $('.navbar').removeClass('navbar-background');
        }
    });

    //smooth scroll page
/*     $('.nav-item a, .header-link, #back-to-top' ).click(function(link) {
        link.preventDefault();

        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top -25
        }, 2000);
    }); */

    /* jQuery(function () {
        jQuery('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html,body').stop().animate({
                        scrollTop: target.offset().top
                    }, 2000);
                    
                }
            }
        });
    }); */

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 25
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });




    // back to top
    $(document).scroll(function () {
        let position = $(this).scrollTop();
        //console.log(position);
        if (position >= 718) {
            $('#back-to-top').addClass('scrollTop');
        } else {
            $('#back-to-top').removeClass('scrollTop');
        }
    });

    $(document).ready(function () {
        setInterval(() => {
             $('.show-late').css('display', 'block');
        }, 4000);
       
        
    });

   
});