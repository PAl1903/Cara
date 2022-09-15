const bar = document.getElementById('bar');
const nav = document.getElementById("navbar");
const close = document.getElementById('close');


if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('.active');
        console.log("hii");
    })
}
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}
