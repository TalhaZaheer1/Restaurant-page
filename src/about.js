import removeFade from "./removeFade";
import fading from "./fadIn";


const content = document.querySelector('#content');

export function createAbout() {
    const content = document.querySelector('#content');
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    section.setAttribute('id', 'about');
    section.classList.add('smallSec');
    h1.textContent = 'About';
    p.textContent = "Welcome to FOODY, Mianwali's ultimate fast food destination. Our menu is a celebration of quick,delectable bites with a twist. From perfectly grilled burgers to crispy golden fries and refreshing salads, FOODY promises an instant delight of flavors. With a commitment to quality and speedy service, FOODY invites you to savor the joy of fast food in the heart of Mianwali—a place where every bite is a delicious story.";

    section.appendChild(h1);
    section.appendChild(p);
    content.appendChild(section);
    return section
}

export function createAboutNew() {
    const about = document.querySelector('#about');
    if (content.lastChild != about) {

        removeFade(content.lastChild, .5);

        const section = createAbout();
        
        section.style.top = '-3%';
        section.style.left = '40%';
        section.style.opacity = '0';


        setTimeout(fading(section, 1.1), 500);
    }
}
