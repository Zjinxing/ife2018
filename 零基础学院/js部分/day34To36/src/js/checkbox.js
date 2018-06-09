/*********************生成表单*********************************/


let regionCheck = document.querySelector("#region-wrapper");
let productCheck = document.querySelector("#product-wrapper");
let items1 = [];
let items2 = [];

// 以sourceData中每一项的k属性创建数组并去重
function getItem(items, k) {
    for (let i = 0; i < sourceData.length; i++) {
        if (items.indexOf(sourceData[i][k]) === -1) {
            items.push(sourceData[i][k])
        }
    }
    return items;
}

items1 = getItem(items1, "region"); // ["华东", "华北", "华南"]
items2 = getItem(items2, "product"); // ["手机", "笔记本", "智能音箱"]
// console.log(items2);

// 创建CheckBox
function createCheckbox(items, el, id) {
    // 创建全选checkbox, 添加id是为了利用事件委托时方便与其他单选框区分
    let ipt = document.createElement("input");
    ipt.setAttribute("type", "checkbox");
    ipt.setAttribute("id", id);
    ipt.checked = true;
    let txt = document.createTextNode("全选");
    // 对数组items进行遍历，创建checkbox
    for (let i = 0; i < items.length; i++) {
        let ipt = document.createElement("input");
        ipt.setAttribute("type", "checkbox");
        ipt.value = items[i];
        ipt.checked = true;
        let text = document.createTextNode(items[i]);
        el.appendChild(ipt);
        el.appendChild(text);
    }
    el.appendChild(ipt);
    el.appendChild(txt);
}

// 点击交互，添加click事件监听
function choose(el, id) {
    el.addEventListener("click", function (e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        let allIpt = document.getElementById(id);
        let ipts = el.querySelectorAll("input");
        switch (target.id) {
            // 当id存在的情况，也就是全选时，点击将所有checkbox都选上
            case id:
                for (let i = 0; i < ipts.length; i++) {
                    ipts[i].checked = true;
                }
                break;
            // 默认情况
            default:
                // 临时创建一个数组，然后对除全选外的checkbox遍历，如果是选中状态，则添加到数组
                let checkedArr = [];
                for (let i = 0; i < ipts.length - 1; i++) {
                    if (ipts[i].checked === true) {
                        checkedArr.push(ipts[i]);
                    }
                }
                // console.log(checkedArr);
                // 如果点击后checkArr长度是3说明全都选上了，将全选的checked设为true
                if (checkedArr.length === 3) {
                    allIpt.checked = true;
                } else if (checkedArr.length === 0) {
                    // 如果点击后数组的长度为0，说明当前点击是最后一个，那么再将其checked设为true
                    target.checked = true;
                } else {
                    // 全选checked设为false
                    allIpt.checked = false;
                }
        }
    }, true);
}
import {sourceData} from "./ife31data";

export {regionCheck, productCheck, items1, items2, createCheckbox, choose}