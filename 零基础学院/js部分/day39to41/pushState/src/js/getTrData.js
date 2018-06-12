let trData = [];

function getTrData() {
    let tab = document.querySelector("#table");
    tab.addEventListener("mouseover", function (e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        while (target !== tab) {
            if (target.tagName.toLocaleLowerCase() === "tr") {
                if (target.rowIndex !== 0) {
                    // console.log(target);
                    let tds = target.querySelectorAll("td");
                    trData = [];
                    for (let i = 2; i < tds.length; i++) {
                        // 这里对tds[i]的子节点长度做一下判断，否则在编辑td时console会报错，虽然不影响编辑完的结果，但强迫症不能忍
                        // 如果子节点长度为2说明只有 text 和一个a标签
                        if (tds[i].childNodes.length === 2) {
                            trData.push(parseInt(tds[i].textContent))
                        }else {
                            // 否则说明含有input，则将input的value添加到数组trData
                            let val = tds[i].querySelector("input").value;
                            trData.push(val);
                        }
                    }
                    let max = Math.max.apply(null, trData);
                    if (max > 360) {
                        trData = trData.map((item) => {
                            return item / (max / 360 + 1);
                        })
                    }
                    // console.log(trData);
                    // line(trData);
                    let chart = new Chart(trData, 4, "#03BDFF", "canvas");
                    chart.clear();
                    chart.line();
                    hisogram(trData);
                }
                break;
            }
            target = target.parentNode;
        }
    }, false)
}

// getTrData();
import {hisogram} from "./bar";
import {Chart} from "./Chart";

export {trData, getTrData}