import { delay } from "./delay";

class IfeRestaurant {
    constructor(obj) {
        this.cash = obj.cash || 1000000;
        this.seats = obj.seats || 1;
        this.staff = obj.staff || [];
    }

    hire(employee) {
        this.staff.push(employee)
    }

    fire(name) {
        this.staff = this.staff.filter((item) => {
            return item.name !== name;
        });
    }
}

let id = 1;

class Staff {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        this.id = id++;

    }

    finishWork() {}
}

class singleCook extends Staff {
    constructor(name, salary, status) {
        super(name, salary, id);
        this.status = "空闲中";
    }

    finishWork(arr) {

        let firstDishes = arr.shift();
        let _this = this;
        return Promise.resolve()
            .then(function() {
                if (firstDishes) {
                    console.log("烹饪中……");
                    let t = firstDishes.cookingTime;
                    // console.log(t);
                    let timer = setInterval(() => {
                        _this.status = `正在做${firstDishes.name}，还需要${t-1}s`;
                        t--;
                        if (t === 0) {
                            clearInterval(timer)
                        }
                    }, 1000)
                }
                return delay(firstDishes.cookingTime * 1000);
            }).then(function() {
                console.log(`${firstDishes.name}做好了，上菜！`);
                _this.status = "空闲中";
                singleWaiter.getWaiter().finishWork(firstDishes.name);
                return delay(50)
            })
    }

    static getCook(name, salary) {
        if (!this.instance) {
            this.instance = new singleCook(name, salary);
        }
        return this.instance;
    }
}

class singleWaiter extends Staff {
    constructor(name, salary) {
        super(name, salary, id);
    }

    finishWork(task) {
        if (Array.isArray(task)) {
            let arr = [];
            for (let index in task) {
                arr.push(task[index].name)
            }
            let str = arr.join("，");
            console.log(`顾客点了一份${str}`);
            console.log(`服务员：大厨，做一份${str}`);
        } else {
            console.log(`${task}来了`);
        }
    }

    static getWaiter(name, salary) {
        if (!this.instance) {
            this.instance = new singleWaiter(name, salary);
        }
        return this.instance
    }
}

class Dishes {
    constructor(name, cost, price, cookingTime) {
        this.name = name;
        this.cost = cost;
        this.price = price;
        this.cookingTime = cookingTime;
    }
}

let dishes = [
    new Dishes("麻辣小龙虾", 30, 58, 5),
    new Dishes("酸辣土豆丝", 8, 15, 3),
    new Dishes("肉末茄子", 12, 25, 3),
    new Dishes("水煮肉片", 18, 38, 4),
    new Dishes("酸菜鱼", 25, 52, 4)
];

function getMenu() {
    let menu = [];
    for (let i in dishes) {
        let obj = {};
        obj.name = dishes[i].name;
        obj.price = dishes[i].price;
        obj.cookingTime = dishes[i].cookingTime;
        menu.push(obj)
    }
    return menu;
}

let menu = getMenu();

class Customer {
    constructor() {
        this.dishes = []; // 用于存放顾客点的菜
        this.needPay = 0; // 需支付的钱
        this.count = []; // 记录顾客餐桌上的菜品
        this.eaten = 0; // 记录已经吃掉的菜品数量
    }

    order() {
        let m = Math.floor(Math.random() * 5) + 1; // 产生一个0-5的随机数,随机点菜数量
        for (let i = 0; i < m; i++) {
            let n = Math.floor(Math.random() * menu.length); // 从菜单中随机取出一个菜品
            this.dishes.push(menu[n]);
        }        
        console.log("点餐中……");
    }

    eat() {
        let _this = this;
        // 如果还没有开始吃，则打印出开始用餐，如果已经开始吃了就不用重复打印了
        if (!this.eaten) {
            console.log("顾客开始用餐……");
        }
        Promise.resolve().then(function() {
            return delay(3000)
        }).then(function() {
            _this.count.shift();
        });
        this.eaten++; // 已吃菜品加1
    }

    pay(arr) {
        // let money = 0;
        let _this = this;
        for (let i in arr) {
            _this.needPay += arr[i].price
        }
        console.log("小二，结账");
        console.log(`一共${_this.needPay}元`);
        console.log("-------顾客离开了-------");
        // return money;
    }
}

export { IfeRestaurant, Staff, singleWaiter, singleCook, Dishes, Customer, menu }