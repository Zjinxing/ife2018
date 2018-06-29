import { operating } from "./open";

function customerIn() {
    let customers = document.querySelectorAll("#queue img");
    if (customers[0]) {
        customers[0].style.position = "absolute";
        let l = customers[0].offsetLeft;
        let t = customers[0].offsetTop;
        let finalLeft = 470;
        let finalTop = 40;
        let timer = setInterval(() => {
            if (l !== finalLeft) {
                l += 1;
                customers[0].style.left = l + "px"
            }
            if (t !== finalTop) {
                customers[0].style.top = t++ + "px";
            }
            if (l === finalLeft && t === finalTop) {
                // 顾客入座后服务员到顾客旁边开始点菜并开始其他一系列动作
                waiterMove();
                operating();
                clearInterval(timer)
            }
        }, 10)
    }
}

function customerOut() {
    let customers = document.querySelectorAll("#queue img");
    let content = document.querySelector("#content");
    let queue = document.querySelector("#queue");

    if (customers[0]) {
        let cus = customers[0];
        cus.style.top = 300 + "px";
        queue.removeChild(cus);
        content.appendChild(cus);

        let finalTop = 640;
        let top = cus.offsetTop;
        let timer = setInterval(() => {
            if (top < finalTop) {
                cus.style.top = top++ + "px";
            } else if (content.contains(cus)) {
                content.removeChild(cus);
            }
        }, 5)
    }
}

// 服务员移动到顾客旁边
function waiterMove() {
    let waiter = document.querySelector("#waiter");
    waiter.style.left = 330 + "px";
    waiter.style.top = 350 + "px";
}

// 服务员回到厨师旁边
function waiterBack() {
    let waiter = document.querySelector("#waiter");
    waiter.style.left = 310 + "px";
    waiter.style.top = 50 + "px";
}
export { customerIn, customerOut, waiterMove, waiterBack }