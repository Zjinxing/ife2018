/*****************交换第一列第二列顺序***************/


function changeTd() {
    let ipts1 = regionCheck.querySelectorAll("input[type=checkbox]:checked");
    let ipts2 = productCheck.querySelectorAll("input[type=checkbox]:checked");
    let tab = document.querySelector("#table");
    // 当地区选择了一个，商品选择了多个的时候，第一列第二列交换
    if (ipts1.length === 1 && ipts2.length !== 1) {
        for (let i = 0; i < tab.rows.length; i++) {
            let temp = tab.rows[i].cells[0].innerHTML;
            tab.rows[i].cells[0].innerHTML = tab.rows[i].cells[1].innerHTML;
            tab.rows[i].cells[1].innerHTML = temp;
        }
    }
}
import {regionCheck} from "./checkbox";
import {productCheck} from "./checkbox";

export {changeTd}
