import {regionCheck, productCheck, items1, items2, createCheckbox, choose} from "./js/checkbox.js";
import {list, getData} from "./js/getData";
import {createTable, table} from "./js/table";
import {mergeCell} from "./js/merge";
import {changeTd} from "./js/changeTd";
import {getTrData} from "./js/getTrData";
import {allLine} from "./js/allLine";
import {edit} from "./js/edit";
import {redraw} from "./js/state";

require("./css/index.css");

// 初始化页面
createCheckbox(items1, regionCheck, "regall");
createCheckbox(items2, productCheck, "proall");
getData();
createTable();
mergeCell(1, 0);
choose(regionCheck, "regall");
choose(productCheck, "proall");
allLine();
table.onmouseout = allLine;
edit();
redraw();
getTrData();

// 添加事件监听
window.onpopstate = redraw;

regionCheck.addEventListener("click", getData, false);
regionCheck.addEventListener("click", createTable, false);
regionCheck.addEventListener("click", changeTd, false);
regionCheck.addEventListener("click", function () {
    mergeCell(1, 0);
}, false);
regionCheck.addEventListener("click", allLine, false);
productCheck.addEventListener("click", getData, false);
productCheck.addEventListener("click", createTable, false);
productCheck.addEventListener("click", changeTd, false);
productCheck.addEventListener("click", function () {
    mergeCell(1, 0)
}, false);
productCheck.addEventListener("click", allLine, false);
