
let contABC = document.querySelector("#contABC");
let contDEF = document.querySelector("#contDEF");
/*
    function getHash() {
        let hash = location.hash? location.hash: "#AD";
        return hash;
    }

    function setCont() {

        let hash = getHash();
        contABC.innerHTML = hash.substr(1,1);
        contDEF.innerHTML = hash.substr(2,1);
    }

    function setHash() {
        let body = document.querySelector("body");
        body.addEventListener("click", function(e) {
            e = e || window.event;
            let target = e.target || e.srcElement;
            switch(target.id)
            {
                case "a":
                case "b":
                case "c":
                    location.hash = target.textContent + contDEF.textContent;
                    setCont();
                    break;
                case "d":
                case "e":
                case "f":
                    location.hash = contABC.textContent + target.textContent;
                    setCont();
                    break;
            }
        }, false)
    }

    setCont()
    setHash();
*/

function changeCont() {
    let query = location.search.slice(1);
    let body = document.querySelector("body");
    if(!query) {
        history.pushState("state", null, location.href + "?AD");
        contABC.innerHTML = location.search.substr(1,1).toLocaleUpperCase();
        contDEF.innerHTML = location.search.substr(2,1).toLocaleUpperCase();
        changeCont();
    } else {
        contABC.innerHTML = location.search.substr(1,1).toLocaleUpperCase();
        contDEF.innerHTML = location.search.substr(2,1).toLocaleUpperCase();
        body.addEventListener("click",function(e) {
            e = e || window.event;
            let target = e.target || e.srcElement;
            switch(target.id)
            {
                case "a":
                case "b":
                case "c":
                    location.search = target.textContent + contDEF.textContent;
                    contABC.innerHTML = location.search.substr(1,1).toLocaleUpperCase();
                    contDEF.innerHTML = location.search.substr(2,1).toLocaleUpperCase();
                    break;
                case "d":
                case "e":
                case "f":
                    location.search = contABC.textContent + target.textContent;
                    contABC.innerHTML = location.search.substr(1,1).toLocaleUpperCase();
                    contDEF.innerHTML = location.search.substr(2,1).toLocaleUpperCase();
                    break;
            }
        },false);
    }
}
changeCont();
window.onpopstate = changeCont;