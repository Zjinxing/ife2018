import {Dishes} from "./iferestaurant";

let dishes = [
    new Dishes("麻辣小龙虾", 30, 58, 5),
    new Dishes("酸辣土豆丝", 8, 15, 2),
    new Dishes("肉末茄子", 12, 25, 3),
    new Dishes("水煮肉片", 18, 38, 3),
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
    // menu.push("si")
    return menu;
}

export {getMenu}