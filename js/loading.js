//登录注册页面
$(function(){
    console.log($("#loading").html())
    $("#loading").find("#username").click(function () {
        var check1 = $(this).val();
        if (check1 == this.defaultValue) {
            $(this).val("");
        }
    });
    $("#loading").find("#loginbutton").click(function(){
        var un = $("#loading").find("#username").val(),
            pw = $("#loading").find("#password").val();
        
        if (un == "ysp" && pw == "ysp") {
            // alert(1)
            alert("登陆成功，页面将自动跳转到首页！")
            window.location.href = "../index.html";
        }else{
            alert("账号或密码错误，请重新输入！");
        };
    });
    $("#loading").find("#lfbut").click(function(){
        alert("注册功能没有开通，原理同登录功能")
    });
});