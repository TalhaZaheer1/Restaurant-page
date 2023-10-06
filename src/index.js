import './styles.css';
import './menuSec.css';
import {createAbout,createAboutNew} from './about';
import createMenu from './menu';
import createContact from './contact';

const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const contactBtn = document.querySelector('#contactBtn');





createAbout();


homeBtn.onclick = createAboutNew;
menuBtn.onclick = createMenu;
contactBtn.onclick = createContact;

