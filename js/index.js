$(".news_img").each(function(){
	$(this).mouseover(function(event) {
		$(this).find("p").addClass('addp');
	});
	$(this).mouseout(function(event) {
		$(this).find("p").removeClass('addp');
	});
});
$(".news").find(".lines").find('div').mouseover(function(){
		$(this).find("span").show();
		$(this).addClass('bgchange');
	});
$(".news").find(".lines").find('div').mouseout(function(){
		$(this).find("span").hide();
		$(this).removeClass('bgchange');
	});
//3d滚动
function threed(){
    var lis = $(".slider").find("li"),
        j = 2,
        i = 2,
        time = null,
        time1 = null;
    function moveRight(){
        $(".sliderline").find("p").animate({"left":"-960px"},1000);
        $(".sliderline").find("p").animate({"left":"0px"},4000);
        j++;
        //console.log(j+"jjjjj")
        lis.eq(i).css({"z-index": j});
        lis.eq(i).animate({"left":"510px","top": "50px","height": "300px","width":"450px"});

        k = (j + 1);
        m = i - 1;
        lis.eq(m).css({"z-index": k});
        lis.eq(m).animate({"left":"180px","top": "0px","height": "400px","width":"600px"});

        i--;

        if( i == 0){
        	clearInterval(time);
        	
        	timeLeft()
        }
    }
    
	$(".sliderline").find("p").animate({"left":"0px"},5000);  
	time = setInterval(moveRight,5000);

    function moveLeft(){
    	$(".sliderline").find("p").animate({"left":"-960px"},1000);
    	$(".sliderline").find("p").animate({"left":"0px"},4000);
        j++;
        
        lis.eq(i).css({"z-index": j});
        lis.eq(i).animate({"left":"0","top": "50px","height": "300px","width":"450px"});
        
        n = parseInt(i) + 1;
        
        k = (j + 1);
        lis.eq(n).css({"z-index": j});
        lis.eq(n).animate({"left":"180px","top": "0px","height": "400px","width":"600px"});
        
        i++;
        
        if( i == 3){
        	clearInterval(time1);            	
        	time = setInterval(moveRight,5000);
        }           
    }
    function timeLeft(){
    	time1 = setInterval(moveLeft,5000);
    }
    
}
threed();

$(".holder").find(".job-title").each(function(){
    $(this).toggle(function(){
        $(this).next().show();
        console.log(1)
    },function(){
        $(this).next().hide();
        console.log(2)
    })
});





