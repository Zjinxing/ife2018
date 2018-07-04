let btn = document.querySelector('#btn');
let white = document.querySelector('#white');
let list = white.classList;
let text = document.querySelector('#text');
function hide(){
    text.classList.toggle('color');
    list.toggle('hidden');
}
btn.onclick = hide;