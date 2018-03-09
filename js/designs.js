$(document).ready(function () {

    //toggle navigation  -> Materialize Lib
    $('.button-collapse').sideNav();

    //toggle colapsible -> Materialize Lib
    $('.collapsible').collapsible();

    //scroll to top (and close menu if open)
    $("#logo-container").click(function () {
        let offset = 20; //Offset of 20px
        $('html, body').animate({
            scrollTop: $("#home").offset().top + offset
        }, 1000);
    });


    //modal trigger contact form  -> Materialize Lib
    $('.modal').modal();

    //open/close tap target
    $('.tap-target').tapTarget('open');
    $('.tap-target').tapTarget('close');

    //open-close FAB
    $('.fixed-action-btn').openFAB();
    $('.fixed-action-btn').closeFAB();
    $('.fixed-action-btn.toolbar').openToolbar();
    $('.fixed-action-btn.toolbar').closeToolbar();

    /******************* ??? SKILBAR -animated for some reason not working*******************/
    //original code
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });

    //skillbar-animated - different approach
    /* $('.skill-button').on('click', function () {
         $('.skillbar').each(function () {
             let perc = $('.skillbar').attr('data-percent');
             $('.skillbar').find('.skillbar-bar').css('width', perc + '')
         });
     });*/

}); //end jQuery doc-ready-f
/*************************References*************************/

/*links
//scroll to top: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//skillbar-animated: https://w3lessons.info/2013/06/04/skill-bar-with-jquery-css3/
*/
