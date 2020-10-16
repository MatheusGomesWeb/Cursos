import React from 'react';

const h1Principal = {
  color: 'green',
  fontSize: '24px',
};

const Titulo = ({ text }) => {
  return <h1 style={h1Principal}>{text}</h1>;
};

export default Titulo;
