const cpfs = document.querySelectorAll('.cpf li');

const elementInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
}

const limparCpf = (cpf) => {
  return cpf.replace(/\D/g, '');
};

const construirCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCpf = (cpf) => {
  return cpf.map(limparCpf).map(construirCpf);
}

const substituirCpfs = (cpfElements) => {
  const cpf = elementInnerText(cpfElements);
  const cpfFormatado = formatarCpf(cpf);

  cpfElements.forEach((element, index) => {
    element.innerText = cpfFormatado[index];
  })
}

//const cpfLimpo = limparCpf('133-777-028-06');

//console.log(limparCpf('133-777-028-06'));

//console.log(construirCpf(cpfLimpo));


//const resultado = elementInnerText(cpfs);

//console.log(formatarCpf(resultado));

substituirCpfs(cpfs);