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
    $('.nav-item a, .header-link, #back-to-top').click(function(link) {
        link.preventDefault();

        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top -25
        }, 2000);
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