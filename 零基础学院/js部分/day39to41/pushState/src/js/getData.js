/*******************获取选中CheckBox的数据********************/


let list = [];

function getData() {
    let ipts = document.querySelectorAll("input[type=checkbox]:checked");
    let arr = [];
    list = [];

    for (let i = 0; i < ipts.length; i++) {
        if (!ipts[i].id) {
            arr.push(ipts[i].value);
        }
    }
    // console.log(arr);

    for (let i = 0; i < sourceData.length; i++) {
        if (arr.indexOf(sourceData[i].region) !== -1 && arr.indexOf(sourceData[i].product) !== -1) {
            list.push(sourceData[i]);
        }
    }
    // console.log(list);
    return list;
}

import {sourceData} from "./ife31data";

export {list, getData}