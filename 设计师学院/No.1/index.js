let oBtn = document.querySelector('#btn');
let inner = document.querySelector('#white');
let list = inner.classList;
let txt = document.querySelector('#text');

function hide() {
    txt.classList.toggle('color');
    list.toggle('hidden');
}
oBtn.onclick = hide;