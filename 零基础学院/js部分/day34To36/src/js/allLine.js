/************画出所有折线图***********/
import {list} from "./getData";
import {Chart} from "./Chart";

function allLine() {
    let arrData = [];
    let findMax = [];
    let clear = new Chart(null, null, null, "canvas");
    clear.clear();
    let colors = ["#ea00c5", "#00E8FF", "#9dcc32", "#2d2bff", "#00ee14", "#dd530d", "#ff0300", "#86751e", "#101fda"];
    for (let i = 0; i < list.length; i++) {
        arrData.push(list[i].sale);
        findMax = findMax.concat(list[i].sale)
    }
    let max = Math.max.apply(null, findMax);
    for (let i = 0; i < arrData.length; i++) {
        arrData[i] = arrData[i].map((item) => {
            let t = max / 360 + 1;
            return item / t;
        });
        let chart = new Chart(arrData[i], 4, colors[i], "canvas");
        chart.line();
    }
}

export {allLine}