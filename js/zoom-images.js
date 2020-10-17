$("article").find("[data-form=image]").find(".zoom").each(function ()
{
    var on = $(this).attr("data-on");
    $(this).zoom({ on: on });
});
$(document).ready(function(){
    $('#ex1').zoom();
    $('#ex2').zoom({ on:'grab' });
    $('#ex3').zoom({ on:'click' });			 
    $('#ex4').zoom({ on:'toggle' });
});