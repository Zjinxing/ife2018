

/*
function getHash() {
    let hash = location.hash? location.hash: "#A";
    return hash;
}
function setCont() {
    let sh = getHash();
    let cont = document.querySelector("#cont");

    // 使用字符串的slice方法去掉"#"
    cont.innerHTML = sh.slice(1);
}
function changeCont() {
    let btn = document.querySelectorAll("button");
    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function() {
            location.hash = this.innerHTML;
            setCont();
        }
    }
}
setCont();
changeCont();
*/

function changeCont() {
    let cont = document.querySelector("#cont");
    let query = location.href.split("?")[1];
    let body = document.querySelector("body");
    if(!query) {
        history.pushState('state',null,location.href + "?a");
        changeCont();
    } else {
        cont.textContent = location.search.slice(1).toLocaleUpperCase();
        body.addEventListener("click",function(e) {
            e = e || window.event;
            target = e.target || e.srcElement;
            switch(target.id)
            {
                case "a":
                case "b":
                case "c":
                    history.pushState('state',null,location.href.split("?")[0]+"?"+target.id);
                    cont.textContent = location.search.slice(1).toLocaleUpperCase();
                    break;
            }
        }, false);
    }
}
changeCont();
window.onpopstate = changeCont;