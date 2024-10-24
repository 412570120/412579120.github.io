$(document).ready(function() {
    // 切換頁面效果
    $(".nav-link").click(function(event) {
        event.preventDefault(); // 阻止連結的預設行為
        var target = $(this).data("target"); // 獲取要顯示的目標內容
        
        // 淡出目前的內容，再淡入目標內容
        $("#content .page").fadeOut(300, function() {
            $(target).fadeIn(300);
        });
    });

    // 顯示當前時間的功能
    function updateTime() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        var timeString = `當前時間：${hours}:${minutes}:${seconds}`;
        $("#time-display").text(timeString);
    }

    // 每秒更新時間
    setInterval(updateTime, 1000);
    updateTime(); // 初始化顯示時間
});
