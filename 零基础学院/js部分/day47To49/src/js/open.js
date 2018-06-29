import { IfeRestaurant, Staff, singleWaiter, singleCook, Dishes, Customer } from './iferestaurant';
import { customerQueue } from "./customerQueue";
import { delay } from "./delay";
import { customerIn, customerOut, waiterMove, waiterBack } from "./animate";

let restaurant = new IfeRestaurant({
    cash: 1000000,
    seats: 1,
    staff: []
});
let cook = singleCook.getCook("老李", 10000);
let waiter = singleWaiter.getWaiter("小王", 8000);
let resCash = document.querySelector("#cash");
let spareSeats = document.querySelector("#spare-seats");
let cookStatus = document.querySelector("#cook-status");
let todoList = document.querySelector("#todoList");
let speak = document.querySelector("#speak");
let cusStatus = document.querySelector("#cus-status");

restaurant.hire(cook);
restaurant.hire(waiter);

function operating() {
    let cus = customerQueue.shift();
    Promise.resolve()
        .then(function() {
            cus.order();
            cusStatus.innerHTML = "点餐中，还有3s点好";
            let t = 3;
            let timer = setInterval(() => {
                t--;
                if (t) {
                    cusStatus.innerHTML = `点餐中，还有${t}s点好`;
                } else {
                    cusStatus.innerHTML = "";
                    let ul = document.createElement("ul");
                    ul.textContent = "点菜列表：";
                    for (let i = 0; i < cus.dishes.length; i++) {
                        let li = document.createElement("li");
                        li.innerHTML = cus.dishes[i].name + "...还未上";
                        ul.appendChild(li);
                    }
                    cusStatus.appendChild(ul);
                    clearInterval(timer);
                }
            }, 1000)
            restaurant.seats -= 1;
            spareSeats.innerHTML = `seats: ${restaurant.seats}`;
            return delay(3000)
        })
        .then(function() {
            waiter.finishWork(cus.dishes);
            // 服务员给顾客点完菜回到厨师旁边
            waiterBack();
            return delay(500)
        })
        .then(function() {
            let ordered = [].concat(cus.dishes); // 先把顾客点的菜存到一个数组，用于结账和上菜
            let ul2 = document.createElement("ul");
            ul2.setAttribute("id", "eat-list");
            cusStatus.appendChild(ul2);

            function f() {
                cook.finishWork(cus.dishes)
                    .then(function() {
                        let currentDishes = ordered.shift();
                        ordered.push(currentDishes)
                        speak.innerHTML = `${currentDishes.name}来了`;

                        let ul = cusStatus.querySelector("ul");
                        let lis = document.querySelectorAll("#seats ul li");
                        let li = document.createElement("li");

                        waiterMove();
                        li.textContent = currentDishes.name + "(等待吃)";
                        ul.removeChild(lis[0]);
                        ul2.appendChild(li);
                        setTimeout(() => {
                            speak.innerHTML = "";
                        }, 500)
                        // 服务员上一个菜，顾客桌上的菜cus.count相应的添加这个菜
                        cus.count.push(currentDishes);
                        // 顾客桌上只要有一个菜就开吃
                        if (cus.count.length >= 1) {
                            function eating() {
                                let eatList = document.querySelectorAll("#eat-list li");

                                for (let i = 0; i < eatList.length; i++) {
                                    let _1st = eatList[0];
                                    // console.log(eatList);
                                    let t = 3;
                                    _1st.innerHTML = currentDishes.name + "...正在吃，剩余3s吃完";
                                    let timer = setInterval(() => {
                                        t--;
                                        if (t) {
                                            _1st.innerHTML = `${currentDishes.name}...正在吃，剩余${t}s吃完`;
                                        } else {
                                            _1st.innerHTML = `${currentDishes.name}...吃完啦`;
                                            if (_1st.parentNode === ul2) {
                                                ul2.removeChild(_1st)
                                            }
                                            ul.appendChild(_1st);                                            
                                            clearInterval(timer);
                                        }
                                    }, 1000)
                                }
                            }
                            eating();
                            cus.eat();
                        }
                        if (cus.dishes.length === 0) {
                            // 如果厨师已经把菜做完，每隔500ms检测一次顾客有没有吃完
                            let timer = setInterval(() => {
                                if (cus.count.length === 0) {
                                    // 如果已经吃完，则付账并离开
                                    cus.pay(ordered);
                                    cusStatus.innerHTML = `顾客支付了${cus.needPay}元然后离开了`;
                                    Promise.resolve().then(function() {
                                        return delay(300)
                                    }).then(function() {
                                        cusStatus.innerHTML = "";
                                    });
                                    customerOut();
                                    // 更新餐馆现金和座位状态
                                    restaurant.cash += cus.needPay;
                                    restaurant.seats += 1;
                                    resCash.innerHTML = `cash: ${restaurant.cash}`;
                                    spareSeats.innerHTML = `seats: ${restaurant.seats}`;
                                    // 如果餐厅有空位并且有队列中有顾客等待,则顾客入座                                
                                    if (restaurant.seats >= 1 && customerQueue.length) {
                                        customerIn();
                                    }
                                    clearInterval(timer)
                                }
                            }, 500)
                        } else if (cus.dishes.length) {
                            // 如果还有菜没做完，服务员回到厨师处并再次执行f()
                            Promise.resolve().then(function() {
                                return delay(500) // 此处500ms是要等waiter从厨师身边移动到顾客身边
                            }).then(function() {
                                speak.innerHTML = ""
                                waiterBack();
                            })
                            f()
                        }
                    });
                todoList.innerHTML = "待做菜品：";
                for (let i in cus.dishes) {
                    let li = document.createElement("li");
                    let text = cus.dishes[i].name;
                    li.innerHTML = text;
                    todoList.appendChild(li);
                }
                let timer = setInterval(() => {
                    cookStatus.innerHTML = cook.status;
                    if (!customerQueue.length) {
                        clearInterval(timer)
                    }    
                }, 200)
            }

            f();
        });
}

export { cook, waiter, operating }