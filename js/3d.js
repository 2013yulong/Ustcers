function threed(){
                    var imgs = $("#imgs").find("img"),
                        j = 0;
                        i = $("#imgs").find("img").length - 1 ;
                        pad_sliderli = $("#pad_slider").find(".pad_sliderr").find("li");
                    function moveRight(){
                        if( i == 0){
                            return false;
                        }
                        j++;
                        imgs.eq(i).css({"z-index": j});
                        imgs.eq(i).animate({"left":"278px","top": "35px","height": "330px"});
                        m = parseInt(i) - 1;    
                        console.log("nnnnnnnnnn"+m);
                        var lefts = parseInt((535 - imgs.eq(m).width())/2);
                        imgs.eq(m).css({"z-index": "10000"});
                        imgs.eq(m).animate({"left":lefts,"top": "15px","height": "369px"});
                        i--;
                        pad_sliderli.hide();
                        pad_sliderli.eq(i).show();
                    }
                    function moveLeft(){
                        if( i == ($("#imgs").find("img").length-1)){
                            //console.log("2,,,,,,,,,,,,,,"+i);
                            return false;
                        }
                        // k = j;
                        j++;
                        console.log("jjjjjjjj===="+j)
                        imgs.eq(i).css({"z-index": j});
                        imgs.eq(i).animate({"left":"0","top": "35px","height": "330px"});
                        pad_sliderli.hide();
                        pad_sliderli.eq(i).show();
                        
                        n = parseInt(i) + 1;
                        console.log("nnnnnnnnnn"+n);
                        var lefts = parseInt((535 - imgs.eq(n).width())/2);
                        imgs.eq(n).css({"z-index": "10000"});
                        imgs.eq(n).animate({"left":lefts,"top": "15px","height": "369px"});
                        
                        i++;
                        pad_sliderli.hide();
                        pad_sliderli.eq(i).show();
                    }
                    $("#imgs").hammer({
                            // 对DOM进行一些初始化，这里可以加入一些参数
                            }).bind("dragleft", function(ev) { 
                                ev.gesture.preventDefault();
                                ev.gesture.stopDetect();
                        		moveLeft();
                            }).bind("dragright", function(ev) {   
                                ev.gesture.preventDefault();
                                ev.gesture.stopDetect();
                        		moveRight();
                            });
                }
                threed();