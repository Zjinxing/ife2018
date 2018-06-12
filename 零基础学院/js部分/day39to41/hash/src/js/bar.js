function hisogram(data) {
    let wrapper = document.querySelector("#svg-wrapper");
    wrapper.innerHTML = "";
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "600");
    svg.setAttribute("height", "400");
    let newData = [];


    function dealData(data) {
        // 找出data中的最大值
        let max = Math.max.apply(null, data);
        // 当data中的最大值大于纵坐标时将data中的所有值除以2
        if (max > 360) {
            newData = data.map((item) => {
                return item / 2
            });
            dealData(newData);
        } else if (max < 180) {
            // 当data中的最大值小于纵坐标的一半时所有值乘以2
            newData = data.map((item) => {
                return item * 2;
            });
            dealData(newData);
        }
        else {
            newData = data;
        }
    }

    dealData(data);


    // 画出坐标轴
    let xAxial = document.createElementNS("http://www.w3.org/2000/svg", "line");
    let yAxial = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xAxial.setAttribute("x1", "20");
    xAxial.setAttribute("y1", "380");
    xAxial.setAttribute("x2", "580");
    xAxial.setAttribute("y2", "380");
    xAxial.setAttribute("style", "stroke:#000; stroke-width:2");
    yAxial.setAttribute("x1", "20");
    yAxial.setAttribute("y1", "380");
    yAxial.setAttribute("x2", "20");
    yAxial.setAttribute("y2", "20");
    yAxial.setAttribute("style", "stroke:#000; stroke-width:2");
    svg.appendChild(xAxial);
    svg.appendChild(yAxial);
    wrapper.appendChild(svg);

    // 画出柱状图
    for (let i = 0; i < newData.length; i++) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", 35 + 40 * i + "");
        rect.setAttribute("y", 380 - newData[i] + "");
        rect.setAttribute("width", "20");
        rect.setAttribute("height", newData[i]);
        rect.setAttribute("style", "fill:#03BDFF");
        svg.appendChild(rect)
    }
}

hisogram(sourceData[0].sale);
import {sourceData} from "./ife31data";

export {hisogram}