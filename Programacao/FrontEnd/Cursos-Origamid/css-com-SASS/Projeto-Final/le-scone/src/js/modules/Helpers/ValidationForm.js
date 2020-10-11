export default class ValidationForm {
  constructor(form, inputName) {
    // selecionando o formulario e o input
    this.form = document.querySelector(form);
    this.inputName = this.form.querySelector(inputName);

    // Elemento que irá mostrar a mensgem de erro
    this.elErro = this.form.querySelectorAll('[data-erro]');

    // bind
    this.validaNome = this.validaNome.bind(this);
    this.validaEmail = this.validaEmail.bind(this);
    this.validaTelefone = this.validaTelefone.bind(this);
    this.validaMensagem = this.validaMensagem.bind(this);
  }

  // insere atributos personalizados na instancia do objeto
  insertAttribute(atribute, value) {
    this.inputName.setAttribute(atribute, value);
  }

  // mensagem de erro
  inputDanger(element, message) {
    const el = element;
    this.inputName.style.border = '2px solid #e52';
    el.style.display = 'block';
    el.innerHTML = message;
    this.form.querySelector('.button').disabled = true;
  }

  // mensagem de sucesso
  inputSuccess(element) {
    const el = element;
    this.inputName.style.border = '2px solid #1ab912';
    el.style.display = 'none';
    this.form.querySelector('.button').disabled = false;
  }

  // validação de input vazio
  inputEmpty(element) {
    const el = element;

    if (this.inputName.value.length < 7) {
      this.inputDanger(el, `O ${this.inputName.getAttribute('name')} precisa ter no minimo 7 caracteres e não pode estar vazio.`);
    } else {
      this.inputSuccess(el);
    }
  }

  // validação do campo nome
  validaNome() {
    this.inputEmpty(this.elErro[0]);
  }

  // validação do campo email
  validaEmail() {
    this.inputEmpty(this.elErro[1]);

    const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;

    if (!this.inputName.value.match(regexpEMAIL)) {
      this.inputDanger(this.elErro[1], `O ${this.inputName.getAttribute('name')} informado é inválido ! tente novamente com outro e-mail.`);
    } else {
      this.inputSuccess(this.elErro[1]);
    }
  }

  // validação do campo telefone
  validaTelefone() {
    this.inputEmpty(this.elErro[2]);

    const regexpTel = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;

    if (!this.inputName.value.match(regexpTel) || this.inputName.value.length > 17) {
      this.inputDanger(this.elErro[2], `O ${this.inputName.getAttribute('name')} informado é inválido ! (xx) x xxxx-xxxx`);
    } else {
      this.inputSuccess(this.elErro[2]);
    }
  }

  // validação do campo mensagem
  validaMensagem() {
    this.inputEmpty(this.elErro[3]);
  }

  // redireciona a validação de acordo com o tipo de campo (front controller)
  validaInput(type) {
    if (type === 'name') {
      this.inputName.addEventListener('change', this.validaNome);
    } else if (type === 'email') {
      this.inputName.addEventListener('change', this.validaEmail);
    } else if (type === 'tel') {
      this.inputName.addEventListener('change', this.validaTelefone);
    } else if (type === 'mensagem') {
      this.inputName.addEventListener('change', this.validaMensagem);
    } else {
      this.inputName.removeEventListener('change', this.validaNome);
      this.inputName.removeEventListener('change', this.validaEmail);
      this.inputName.removeEventListener('change', this.validaTelefone);
      this.inputName.removeEventListener('change', this.validaMensagem);
    }
  }
}
