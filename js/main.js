const search = document.querySelector('.search');
search.addEventListener('click', clickSearch);
function clickSearch (e){
    e.preventDefault();
    const input  = document.querySelector('.input__group');
    input.classList.toggle('inputWidth');
}
// counter
document.addEventListener('DOMContentLoaded', () =>{
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval( () => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("counter1",0,450,5000);
    counter("counter2",0,122,5000);
    counter("counter3",100,25,4000);
})

let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(current => {
    current.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active');
        current.classList.toggle('active');
    });
})

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('Sticky',scrollY > 500);
})

let btn = document.querySelector('.btn');
window.onscroll = () =>{
    scrollBtn();
}
function scrollBtn(){
    if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500 ){
        btn.style.right = `20px`;
        btn.style.transition = `0.5s`;
    }else{
        btn.style.right = `-50%`;
    }
}

btn.addEventListener('click', btnClick);
function btnClick(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let btnDisabled = document.getElementsByClassName('disabled');
for(i = 0; i< btnDisabled.length; i++){
    btnDisabled[i].addEventListener('click', disabledBtn);
}
function disabledBtn(){
    window.alert("Sorry, this button cannot use");
}

let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('showNav');
    hamburger.classList.toggle('rotate');
})