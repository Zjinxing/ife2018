let arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
//位数补齐函数
function aligning(time) {
    if(time < 10) {
        time = "0" + time;
    }
    return time;
}

//返回星期几的函数
function week(date) {
    // let date = new Date();
    let weekDay = date.getDay();
    return arr[weekDay];
}

//返回时间的函数
function time(date) {
    // let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    return aligning(hour) + ":" + aligning(min) + ":" + aligning(sec)
}

//返回日期的函数
function showDate(date) {
    // let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return year + "年" + aligning(month) + "月" + aligning(day) + "日";
}

function format(YY,DD,S) {
    return YY + " " + DD + " " + S;
}
