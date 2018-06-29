import {customerQueue} from "./customerQueue";

let queue = document.querySelector("#queue");

function createDomQueue() {
    for (let i in customerQueue) {
        let img = document.createElement("img");
        img.src = "../src/img/customer.jpg";
        img.style.width = "80px";
        queue.appendChild(img)
    }
}
export {createDomQueue}