import React from 'react'

// Estilo das Listas
const liStyle = {
  float: 'left',
  margin: '0 20px',
  height: '450px'
}

// Componente Produto que recebe o useState como parametro
const Produto = ({ produto }) => {
  const { id, nome, descricao, fotos, preco, usuario_id, vendido } = produto;

  // se existir o produto (se carregou os dados)
  if (produto) {
    return (
      <div>
        <h1>userID: {usuario_id}</h1>
        <h1>Product ID: {id}</h1>
        <h1>{nome}</h1>
        <p>{descricao}</p>
        <span><strong>Preço: {preco}</strong></span>
        <br />
        <span><strong>Vendido: {vendido}</strong></span>
        <ul style={{ listStyle: 'none' }}>
          {fotos.map((foto) => <li key={foto.titulo}><img src={foto.src} alt={foto.titulo} style={liStyle} /></li>)}
        </ul>
      </div>
    )
  } else {
    return <div></div>;
  }
}

export default Produto;