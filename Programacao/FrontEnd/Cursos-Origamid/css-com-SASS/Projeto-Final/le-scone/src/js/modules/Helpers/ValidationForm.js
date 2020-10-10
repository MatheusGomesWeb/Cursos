export default class ValidationForm {
  constructor(form, inputName) {
    this.form = document.querySelector(form);
    this.inputName = this.form.querySelector(inputName);
    this.elErro = this.form.querySelectorAll('[data-erro]');

    // bind
    this.validaNome = this.validaNome.bind(this);
    this.validaEmail = this.validaEmail.bind(this);
    this.validaTelefone = this.validaTelefone.bind(this);
    this.validaMensagem = this.validaMensagem.bind(this);
  }

  insertAttribute(atribute, value) {
    this.inputName.setAttribute(atribute, value);
  }

  inputDanger(element, message) {
    const el = element;
    this.inputName.style.border = '2px solid #e52';
    el.style.display = 'block';
    el.innerHTML = message;
    this.form.querySelector('.button').disabled = true;
  }

  inputSuccess(element) {
    const el = element;
    this.inputName.style.border = '2px solid #1ab912';
    el.style.display = 'none';
    this.form.querySelector('.button').disabled = false;
  }

  inputEmpty(element) {
    const el = element;

    if (this.inputName.value.length < 7) {
      this.inputDanger(el, `Erro: o ${this.inputName.getAttribute('name')} precisa ter no minimo 7 caracteres e não pode estar vazio.`);
    } else {
      this.inputSuccess(el);
    }
  }

  validaNome() {
    this.inputEmpty(this.elErro[0]);
    console.log(this.inputName.value);
  }

  validaEmail() {
    this.inputEmpty(this.elErro[1]);
  /* const regexp = //g;

    const novotexto = 'JavaScript é a Ling.ua-ge*m de 2020'.replace(regexp, 'Y');
    console.log(novotexto); */
  }

  validaTelefone() {
    this.inputEmpty(this.elErro[2]);
    console.log(this.inputName.getAttribute('name'));
  }

  validaMensagem() {
    this.inputEmpty(this.elErro[3]);
    console.log(this.inputName.getAttribute('name'));
  }

  validaInput(type) {
    if (type === 'name') {
      this.inputName.addEventListener('change', this.validaNome);
    } else if (type === 'email') {
      this.inputName.addEventListener('keydown', this.validaEmail);
    } else if (type === 'tel') {
      this.inputName.addEventListener('change', this.validaTelefone);
    } else if (type === 'mensagem') {
      this.inputName.addEventListener('change', this.validaMensagem);
    } else {
      this.inputName.removeEventListener('change', this.validaNome);
      this.inputName.removeEventListener('keydown', this.validaEmail);
      this.inputName.removeEventListener('change', this.validaTelefone);
      this.inputName.removeEventListener('change', this.validaMensagem);
    }
  }
}
