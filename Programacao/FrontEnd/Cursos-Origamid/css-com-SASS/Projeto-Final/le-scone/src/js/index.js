import funcionamento from './modules/Funcionamento.js';
import menuMobile from './modules/menuMobile.js';
import scrollSuaveLinksInternos from './modules/scrollSuaveLinksInternos.js';
import scrollTop from './modules/scrollTop.js';

funcionamento();

// Menu mobile
menuMobile('[data-mobileButton]', '[data-menu]');

// Scroll Suave nos Links do menu
scrollSuaveLinksInternos('.menu-principal ul li a');

// Scroll para o topo
scrollTop('[data-scrollTop]');
