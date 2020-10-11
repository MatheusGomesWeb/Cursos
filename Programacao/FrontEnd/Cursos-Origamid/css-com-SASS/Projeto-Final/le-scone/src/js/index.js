import funcionamento from './modules/Funcionamento.js';
import menuMobile from './modules/menuMobile.js';
import scrollSuaveLinksInternos from './modules/scrollSuaveLinksInternos.js';
import scrollTop from './modules/scrollTop.js';
import animarAoScroll from './modules/animarAoScroll.js';
import ValidationForm from './modules/Helpers/ValidationForm.js';
import Slide from './modules/Slide.js';

// Funcionamento
funcionamento('.fechado');

// Menu mobile
menuMobile('[data-mobileButton]', '[data-menu]');

// Scroll Suave nos Links do menu
scrollSuaveLinksInternos('.menu-principal ul li a');

// Scroll para o topo
scrollTop('[data-scrollTop]');

// Animar Ao scroll
animarAoScroll('[data-scroll]');

// Validar formulario de contato
const validaNome = new ValidationForm('#form-contato', '#nome');
validaNome.insertAttribute('maxlength', 20);
validaNome.insertAttribute('placeholder', 'Seu nome completo');
validaNome.validaInput('name');

// valida input email
const validaEmail = new ValidationForm('#form-contato', '#email');
validaEmail.insertAttribute('maxlength', 20);
validaEmail.insertAttribute('placeholder', 'Seu email');
validaEmail.validaInput('email');

// valida input telefone
const validaTel = new ValidationForm('#form-contato', '#tel');
validaTel.insertAttribute('maxlength', 20);
validaTel.insertAttribute('placeholder', '(13) 9 9999-9999');
validaTel.validaInput('telngf');

// valida input mensagem
const validaMensagem = new ValidationForm('#form-contato', '#mensagem');
validaMensagem.insertAttribute('maxlength', 20);
validaMensagem.insertAttribute('placeholder', 'Mensagem');
validaMensagem.validaInput('mensagem');

// Slide
const slide = new Slide('#slide');
slide.init();
