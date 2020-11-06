import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Template/Header';
import Home from './View/Home';
import Produto from './View/Produto';
import ProdutosList from './View/ProdutosList';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos" element={<ProdutosList />} />
        <Route path="produtos/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
