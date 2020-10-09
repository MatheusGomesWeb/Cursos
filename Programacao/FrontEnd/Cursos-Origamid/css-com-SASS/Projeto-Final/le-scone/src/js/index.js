import funcionamento from './modules/Funcionamento.js';
import menuMobile from './modules/menuMobile.js';
import scrollSuaveLinksInternos from './modules/scrollSuaveLinksInternos.js';

funcionamento();

// Menu mobile
menuMobile('[data-mobileButton]', '[data-menu]');

// Scroll Suave nos Links do menu
scrollSuaveLinksInternos('.menu-principal ul li a');
