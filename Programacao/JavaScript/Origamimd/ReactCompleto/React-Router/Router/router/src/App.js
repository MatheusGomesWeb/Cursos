import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Footer from './Footer';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';
import Login from './Login';
import Produto from './Produto';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:name/*" element={<Produto />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
