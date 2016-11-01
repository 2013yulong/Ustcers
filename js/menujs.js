//menu caidan
$(function(){
    $("#nav").find("li").find("a").each(function(){
        $(this).hover(function(){

            $(this).parent().addClass("lis");
            $(this).next().slideDown();
            $(this).parent().siblings().find("ol").slideUp();
            $(this).parent().siblings().removeClass("lis");
            $(this).parent().siblings().removeClass("indexlis");
        });
        $(this).next().click(function(){
            $(this).slideUp();
            $("#nav").find("li").removeClass("lis");
            $("#nav").find("li").eq(0).addClass("indexlis");
        });
    });
});