let btn = document.querySelector('#generator');
let heading = document.querySelector('#rgb');
let box = document.querySelector('.box');
btn.addEventListener('click',()=>{
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    heading.innerHTML = `RGB(${red},${green},${blue})`;
    box.style.backgroundColor = `rgb(${red},${green},${blue})`;
})