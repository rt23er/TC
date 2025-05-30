// 获取按钮元素
let sea_wind_btn = document.querySelector('.sea-wind .btn');

// 海风播放index
let sea_wind_index = 1;

// 陆地风
let land_wind_index = 1;


// 隐藏元素
$(".sea-wind .step1").hide();
$(".sea-wind .step2").hide();
$(".land-wind .step1").hide();
$(".land-wind .step2").hide();
$(".ani-cont").hide()

// 1. 实现动画播放函数（海风形成）
$(".sea-wind .btn").on("click", function () {


    if (sea_wind_index === 1) {
        // 获取所有的 '.step1' 元素
        $(".sea-wind .step2").hide();
        $(".sea-wind .step1").fadeOut(500).fadeIn(500);

    }
    if (sea_wind_index === 2) {
        // 获取所有的 '.step2' 元素
        $(".sea-wind .step2").fadeOut(500).fadeIn(500);

    }
    if (sea_wind_index === 3) {
        // 获取所有的 '.step3' 元素
        $(".sea-wind .step1").fadeOut(500);
        $(".sea-wind .step2").fadeOut(500);
    }

    sea_wind_index++;
    if (sea_wind_index === 4) {

        sea_wind_index = 1; // 重置为1
    }

    //


});


//实现动画播放陆地风
$(".land-wind .btn").on("click", function () {
    if (land_wind_index === 1) {
        // 获取所有的 '.step1' 元素
        $(".land-wind .step2").hide();
        $(".land-wind .step1").fadeOut(500).fadeIn(500);

    }
    if (land_wind_index === 2) {
        // 获取所有的 '.step2' 元素
        $(".land-wind .step2").fadeOut(500).fadeIn(500);

    }
    if (land_wind_index === 3) {
        // 获取所有的 '.step3' 元素
        $(".land-wind .step1").fadeOut(500);
        $(".land-wind .step2").fadeOut(500);
    }
    land_wind_index++;
    if (land_wind_index === 4) {
        land_wind_index = 1; // 重置为1
    }

}
)

let valley_wind_index = 1;
//实现谷风
$(".valley-wind .btn").on("click", function () {
    if (valley_wind_index === 1) {
        // 获取所有的 '.step1' 元素
        $(".valley-wind .step2").hide();
        $(".valley-wind .step1").fadeOut(500).fadeIn(500);

    }
    if (valley_wind_index === 2) {
        // 获取所有的 '.step2' 元素
        $(".valley-wind .step2").fadeOut(500).fadeIn(500);

    }
    if (valley_wind_index === 3) {
        // 获取所有的 '.step3' 元素
        $(".valley-wind .step1").fadeOut(500);
        $(".valley-wind .step2").fadeOut(500);
    }
    valley_wind_index++;
    if (valley_wind_index === 4) {
        valley_wind_index = 1; // 重置为1
    }
})



//实现山风
let mountain_wind_index = 1;
//实现谷风
$(".mountain-wind .btn").on("click", function () {
    if (mountain_wind_index === 1) {
        // 获取所有的 '.step1' 元素
        $(".mountain-wind .step2").hide();
        $(".mountain-wind .step1").fadeOut(500).fadeIn(500);

    }
    if (mountain_wind_index === 2) {
        // 获取所有的 '.step2' 元素
        $(".mountain-wind .step2").fadeOut(500).fadeIn(500);

    }
    if (mountain_wind_index === 3) {
        // 获取所有的 '.step3' 元素
        $(".mountain-wind .step1").fadeOut(500);
        $(".mountain-wind .step2").fadeOut(500);
    }
    mountain_wind_index++;
    if (mountain_wind_index === 4) {
        mountain_wind_index = 1; // 重置为1
    }
})


//实现山风
let urban_wind_index = 1;
//实现谷风
$(".urban-wind .btn").on("click", function () {
    if (urban_wind_index === 1) {
        // 获取所有的 '.step1' 元素
        $(".urban-wind .step2").hide();
        $(".urban-wind .step1").fadeOut(500).fadeIn(500);

    }
    if (urban_wind_index === 2) {
        // 获取所有的 '.step2' 元素
        $(".urban-wind .step2").fadeOut(500).fadeIn(500);

    }
    if (urban_wind_index === 3) {
        // 获取所有的 '.step3' 元素
        $(".urban-wind .step1").fadeOut(500);
        $(".urban-wind .step2").fadeOut(500);
    }
    urban_wind_index++;
    if (urban_wind_index === 4) {
        urban_wind_index = 1; // 重置为1
    }
})
