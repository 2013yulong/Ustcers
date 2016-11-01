//menu caidan
// $(function(){
//     $("#nav").find("li").find("a").each(function(){
//         $(this).hover(function(){

//             $(this).parent().addClass("lis");
//             $(this).next().slideDown();
//             $(this).parent().siblings().find("ol").slideUp();
//             $(this).parent().siblings().removeClass("lis");
//             $(this).parent().siblings().removeClass("indexlis");
//         });
//         $(this).next().click(function(){
//             $(this).slideUp();
//             $("#nav").find("li").removeClass("lis");
//             $("#nav").find("li").eq(0).addClass("indexlis");
//         });
//     });
// });

$(function(){
    $("#nav").children("li").each(function(){
        $(this).find("a").hover(function(){
            $(this).parent().addClass("lis");
            $(this).parent().find("ol").slideDown();

            $(this).parent().siblings().find("ol").slideUp();
            $(this).parent().siblings().removeClass("lis");

            $(this).next("ol").find("li").eq(0).mouseout(function(){
                
                $(this).parent().slideUp();

                $("#nav").find("li").removeClass("lis");
                $("#nav").find("li").eq(0).addClass("lis");
            });
        });  
    });
});