import funcionamento from './modules/Funcionamento.js';
import menuMobile from './modules/menuMobile.js';
import scrollSuaveLinksInternos from './modules/scrollSuaveLinksInternos.js';
import scrollTop from './modules/scrollTop.js';
import animarAoScroll from './modules/animarAoScroll.js';

funcionamento('.fechado');

// Menu mobile
menuMobile('[data-mobileButton]', '[data-menu]');

// Scroll Suave nos Links do menu
scrollSuaveLinksInternos('.menu-principal ul li a');

// Scroll para o topo
scrollTop('[data-scrollTop]');

// Animar Ao scroll
animarAoScroll('[data-scroll]');
