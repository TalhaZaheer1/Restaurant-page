import removeFade from "./removeFade";
import fading from "./fadIn";

const content = document.querySelector('#content');

export default function createMenu() {
    const menuS = document.querySelector('#menuSection');
    
    if(content.lastChild != menuS){
    removeFade(content.lastChild,.5);
    const menu = {
        cardArr: [],
        titleArr: ["Chicken Burger", "Beef Burger", "Zinger Burger", "Alfredo Fettucine", "Fries", "Cold Drink", "Cold Coffee", "Tea"],
        paraArr: [" Immerse yourself in the juicy succulence of a perfectly seasoned and grilled chicken patty, nestled within a soft, toasted brioche bun.",
                 "Sink your teeth into a succulent, flame-grilled beef patty, perfectly seasoned to perfection and nestled between two pillow-soft, toasted brioche buns.",
                "Immerse yourself in the crispy delight of a perfectly fried chicken fillet, seasoned with our signature blend of spices for a bold kick. ",
                "Tender fettuccine noodles are perfectly cooked and cradled in a velvety Alfredo sauce, crafted with the finest cream, butter, and Parmesan cheese.",
                "Crispy on the outside, fluffy on the inside, our fries are expertly seasoned with a perfect blend of spices to tickle your taste buds.",
                "Alot of Flavors","Just a coffee","Just a Tea"],
        priceArr: ["$5","$10","$7","$20","$4","$2","$5","$5"],
    }
  
    const section = document.createElement('section');
    section.setAttribute('id', 'menuSection')
    for (let i = 0; i < 8; i++) {
        menu.cardArr[i] = document.createElement('div');
        menu.cardArr[i].classList.add('card');
        const title = document.createElement('h2');
        title.textContent = menu.titleArr[i];
        const para = document.createElement('p');
        para.textContent = menu.paraArr[i];
        const price = document.createElement('p');
        price.textContent = menu.priceArr[i];
        menu.cardArr[i].appendChild(title);
        menu.cardArr[i].appendChild(para);
        menu.cardArr[i].appendChild(price);
        section.appendChild(menu.cardArr[i]);
    }
    content.appendChild(section);
    setTimeout(fading(section,1.1),500);
    return menu;
    }
}