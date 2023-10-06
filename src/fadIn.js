

export default function fadeIn(el, secs) {
    const menuSec = document.querySelector('#menuSection');

    return function fading() {
        el.style.transition = `all ${secs}s ease`;
        el.style.opacity = '1';
        if (el == menuSec) {
            el.style.top = '0';
            el.style.left = '10%';
        }else{
            el.style.top = '13%';
            el.style.left = '17%';
        }
    }
}