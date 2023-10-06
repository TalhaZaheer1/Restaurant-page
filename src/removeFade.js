
export default function removeEl(el, secs) {
    const menuSec = document.querySelector('#menuSection');


    const milisecs = secs * 1000;
    el.style.transition = `all ${secs}s ease`;
    el.style.opacity = '0';
    if (el == menuSec) {
        el.style.top = '6%';
        el.style.left = '-10%';
    }else{
        el.style.top = '20%';
        el.style.left = '0';
    }
    setTimeout(() => el.parentNode.removeChild(el), milisecs)
};

