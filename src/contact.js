import removeFade from "./removeFade";
import fading from "./fadIn";

const content = document.querySelector('#content');

export default function createContact(){

    const contact = document.querySelector('#contact');
    if(content.lastChild != contact){
        
        removeFade(content.lastChild,.5);
        const section = document.createElement('section');
        const h1 = document.createElement('h1');
        const para = document.createElement('p');

        section.setAttribute('id', 'contact');
        section.classList.add('smallSec')
        
        h1.textContent = "CONTACT";
        para.textContent = 'Address:PAF road,Mianwali\nPhone Number:03367123899';
        section.appendChild(h1);
        section.appendChild(para);
        content.appendChild(section);
        
        
        section.style.top = '-3%';
        section.style.left = '40%';
        section.style.opacity = '0';


        setTimeout(fading(section,1.1),500);
    }
}
