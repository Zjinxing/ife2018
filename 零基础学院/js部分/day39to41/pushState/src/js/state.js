import {getData} from "./getData";
import {mergeCell} from "./merge";
import {createTable} from "./table";
import {allLine} from "./allLine";
import {changeTd} from "./changeTd";

function getStatus() {
    // 此函数用于获取checkbox的选中状态
    let box = document.querySelectorAll("input[type=checkbox]");
    let str = "";
    for (let i = 0, len = box.length; i < len; i++) {
        if (box[i].checked === true) {
            str += "1";
        } else {
            str += "0";
        }
    }
    return str;
}

function setStatus() {
    // 这个用来重设checkbox的选中状态
    let box = document.querySelectorAll("input[type=checkbox]");
    let strArr = location.search.slice(1).split("");
    for (let i = 0, len = strArr.length; i < len; i++) {
        if (strArr[i] === "1") {
            box[i].checked = true;
        } else if (strArr[i] === "0") {
            box[i].checked = false;
        }
    }
}

function redraw() {
    let query = location.href.split("?")[1];
    let str = getStatus();
    if (!query) {
        // 首先判断location.search是否存在，如果不存在则根据checkbox选中状态替换一条历史记录
        history.replaceState("state", null, "?" + str)
    } else {
        // 如果存在则根据location.search设置checkbox状态，并执行以下函数
        setStatus();
        getData();
        createTable();
        changeTd();
        mergeCell(1, 0);
        allLine();

    }
}

export {getStatus, redraw}