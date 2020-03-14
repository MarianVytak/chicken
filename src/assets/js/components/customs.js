$(function () {

    'use strict';

    // Navigation anchors
    $('.js-anchor').on('click', function(e){
        e.preventDefault();

        let navScroll = $(this).attr('href'),
            navScrollBlock = $(navScroll).offset().top;
        $('html, body').animate({
            scrollTop: navScrollBlock
        }, 2000);
    });


    // Modal
    $('.btn-modal-call').on('click', function (e) {
        e.preventDefault();
        $('html, body').addClass('modal-active');
        $('.modal-call').fadeIn();
    });
    $('.modal-close').on('click', function (e) {
        e.preventDefault();
        $('html, body').removeClass('modal-active');
        $('.modal-call').fadeOut();
    });

});