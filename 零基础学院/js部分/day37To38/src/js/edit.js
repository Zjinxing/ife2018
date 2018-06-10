/************编辑单元格**************/
import {sourceData} from "./ife31data";

function edit() {
    let tab = document.querySelector("table");
    tab.addEventListener("click", function (e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
            if (target.tagName.toLocaleLowerCase() === "a") {
                let td = target.parentNode;
                let value = parseInt(td.textContent);
                let ipt = document.createElement("input");
                ipt.setAttribute("type", "text");
                ipt.value = value;
                // console.log(parseInt(td.textContent))
                let btn1 = document.createElement("button");
                let btn2 = document.createElement("button");
                btn1.textContent = "确定";
                btn1.setAttribute("id", "confirm");
                btn2.textContent = "取消";
                btn2.setAttribute("id", "cancel");
                td.innerHTML = '';
                td.appendChild(ipt);
                td.appendChild(btn1);
                td.appendChild(btn2);
                ipt.select();

                // 点击确认按钮响应
                function confirm() {
                    let val = ipt.value;
                    if (isNaN(parseInt(val))) {
                        ipt.value = "";
                        ipt.focus();
                        alert("请输入数字！");
                    } else {
                        let a = document.createElement("a");
                        a.setAttribute("href", "#");
                        a.innerHTML = "编辑";
                        td.textContent = val;
                        td.appendChild(a);

                        // 更改sourceData并存入localStorage
                        // console.log(parseInt(tab.rows[2].cells[3].textContent));
                        let index = td.cellIndex - 2;
                        let value = parseInt(td.textContent);
                        let rIndex = td.parentNode.rowIndex;
                        let s1 = tab.rows[rIndex].cells[0].textContent;
                        let s2 = tab.rows[rIndex].cells[1].textContent;
                        for (let i = 0; i < sourceData.length; i++) {
                            if ((s1 === sourceData[i].region && s2 === sourceData[i].product) || (s1 === sourceData[i].product && s2 === sourceData[i].region)) {
                                sourceData[i].sale.splice(index, 1, value);
                                localStorage.setItem("data", JSON.stringify(sourceData));
                            }
                        }
                    }
                }

                // 这里btn1阻止mousedown默认事件，否则先执行了ipt.onblur = cancel;
                btn1.onmousedown = (e) => {
                    e.preventDefault()
                };
                btn1.onclick = confirm;

                // 点击取消按钮响应
                function cancel() {
                    let a = document.createElement("a");
                    a.setAttribute("href", "#");
                    a.innerHTML = "编辑";
                    td.textContent = value;
                    td.appendChild(a);
                }

                btn2.onclick = cancel;
                // 当input失去焦点时执行cancel
                ipt.onblur = cancel;
                // 添加键盘事件
                document.onkeydown = function (e) {
                    if (e.keyCode === 13) {
                        confirm();
                    }
                    if (e.keyCode === 27) {
                        cancel();
                    }
                };

            }
    })
}

export {edit}