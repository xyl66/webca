/**
 * Created by GUNDAM on 21/2/17.
 */
$(function () {
    /*轮播*/
    $('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false
    });
    /*轮播*/
    $("#wizard").scrollable({
        onSeek: function (event, i) {
            $("#status li").removeClass("active").eq(i).addClass("active");
        },
        onBeforeSeek: function (event, i) {
            if (i == 1) {
                var user = $("#user").val();
                if (user == "") {
                    alert("请输入用户名！");
                    return false;
                }
                var pass = $("#pass").val();
            }
        }
    });
    $("#sub").click(function () {
        var data = $("form").serialize();
        alert(data);
    });
});