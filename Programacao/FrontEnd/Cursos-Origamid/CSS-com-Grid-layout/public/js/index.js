import MenuMobile from './modules/Dom/MenuMobile.js';
import ScrollSuave from './modules/Dom/ScrollSuave.js';
import TabNav from './modules/Dom/TabNav.js';

// Deslizar para a seção suavemente (Links do menu)
const scrollSuave = new ScrollSuave('nav.menu a[href^="#"]');
scrollSuave.init();

// Navegação por Tabs (links do menu, conteudo que irá aparecer)
const tabnav = new TabNav('.aside-nav ul li a', 'main.content');
tabnav.init();

// Menu mobile
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();