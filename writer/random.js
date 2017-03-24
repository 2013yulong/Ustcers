    $(function () {
    var run = 0,
        heading = $(".middleSay"),
        timer,
        food,
        lablePeople = false;
    $("#start").click(function () {
        var list = $("#list").val().replace(/( |,|，)+/g, " ").replace(/^ | $/g, "").split(" ");
        var listLady = [];
        if ($('.shakeBody').length) {
            listLady=['苍老师','奥黛丽·赫本','玛丽莲·梦露','费雯丽','斯嘉丽-约翰逊','泷泽萝拉','波多野结衣','冲田杏梨','立花美凉','范冰冰'];
        }
        var listNew = list.concat(listLady);
        var m = list.length,
        n=listLady.length;

        if (!run) {
            heading.html("谁写呢？正在选择...");
            $(this).val("停止");
            timer = setInterval(function () {
                var r = Math.ceil(Math.random() * (m+n));
                    food = listNew[r - 1];
                if (r > m ) {
                    lablePeople = true;
                }else{
                    lablePeople = false;
                }
                $("#what").html(food);
                var rTop = Math.ceil(Math.random() * $(document).height()),
                    rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                    rSize = Math.ceil(Math.random() * (37 - 14) + 14);
                $("<span class='temp'></span>").html(food).hide().css({
                    "top": rTop,
                    "left": rLeft,
                    "color": "rgba(0,0,0,." + Math.random() + ")",
                    "fontSize": rSize + "px"
                }).appendTo("body").fadeIn("slow", function () {
                    $(this).fadeOut("slow", function () {
                        $(this).remove();
                    });
                });
            }, 100);
            run = 1;
        } else {
            if (lablePeople) {
                heading.html(food+"！她会写战报么？那好吧，<b>为庆祝国足大胜，</b>"+" 下次你踢球，就让她给你当啦啦队了！");
                lablePeople = false;
            }else{
                heading.html("谁写？谁写呢？就他了吧！");
            }
            $(this).val("不行，换一个");
            clearInterval(timer);
            run = 0;
        };
    });

    document.onkeydown = function enter(e) {
        var e = e || event;
        if (e.keyCode == 13) $("#start").trigger("click");
    };
});