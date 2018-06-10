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
                        trData.push(tds[i].innerHTML)
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