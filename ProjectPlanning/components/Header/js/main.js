// JavaScript Document

/*Dropdown Menu
*/

$("li").hover(
        function(){
            $(this).children("li ul").slideDown(200);
        },
        function(){
            $(this).children('li ul').slideUp(200);
        }
    );