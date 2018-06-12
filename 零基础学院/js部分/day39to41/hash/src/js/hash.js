import {getData} from "./getData";
import {createTable} from "./table";
import {mergeCell} from "./merge";
import {allLine} from "./allLine";
import {changeTd} from "./changeTd";

function setHash() {
    let box = document.querySelectorAll("input[type=checkbox]");
    // 没想到什么好方法记录checkbox状态，就用一个字符串吧
    // 遍历checkbox，如果是选中状态，字符串+"1",否则+"0"
    let str = "";
    for (let i = 0, len = box.length; i < len; i++) {
        if (box[i].checked) {
            str += "1";
        } else {
            str += "0";
        }
    }
    location.hash = str;
}

function setCheckBox() {
    let box = document.querySelectorAll("input[type=checkbox]");
    // 将字符串转为数组，根据字符串还原checkbox状态
    let s = location.hash.slice(1).split("");
    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] === "1") {
            box[i].checked = true;
        } else if (s[i] === "0") {
            box[i].checked = false;
        }
    }
}

// 初始化
function init() {
    // 如果hash不存在 根据checkbox设置hash
    if (!location.hash) {
        setHash();
    } else {
        // 否则根据hash设置checkbox，并根据checkbox重新渲染表格和图表
        setCheckBox();
        getData();
        createTable();
        changeTd();
        mergeCell(1, 0);
        allLine();
    }

}


export {setHash, setCheckBox, init}