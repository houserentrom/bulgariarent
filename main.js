/**
* ---------------------------------------------------------------------------
Template Name: Finance business template 
URL: http://finance.imranhoshain.com
Author: spytoever
Version: 1.0
* --------------------------------------------------------------------------- 
*/
(function ($) {
    "use strict";

    $(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        /*---------------------------------------------------
                    Camera slider
        ---------------------------------------------------*/

        if ($("#camera_wrap_4").length) {
            $("#camera_wrap_4").camera({
                height: '590px',
                pagination: false,
                thumbnails: false,
                imagePath: 'img/',
                playPause: false,
                loader: 'none',
                time: 3000,
                transPeriod: 1500,
            });
        }
        
        
        $('#gdb1').click(function () {
            $("html, body").animate({
                scrollTop: $(window).height()
            }, 1000);
            return false;
        });
       
        
        /*---------------------------------------------------
                    Lightbox
        ---------------------------------------------------*/

        $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        /*---------------------------------------------------
                    Sticky menu
        ---------------------------------------------------*/

        $(".header-bottom-area").sticky({
            topSpacing: 0
        });

        /*---------------------------------------------------
                    Scrool Top
        ---------------------------------------------------*/

        $('#scrollTop').on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });


    });


    $(window).load(function () {

    });

}(jQuery));