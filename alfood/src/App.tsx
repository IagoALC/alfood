import AdministracaoRestaurantes from './paginas/Administracao/AdministracaoRestaurantes';
import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoCadastroRestaurantes from './paginas/Administracao/AdministracaoCadastroRestaurantes';
import AtualizaRestaurantes from './paginas/Administracao/AtualizaRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/administracao/restaurantes" element={<AdministracaoRestaurantes />} />
      <Route path="/administracao/restaurantes/novo" element={<AdministracaoCadastroRestaurantes />} />
      <Route path="/administracao/restaurantes/:id" element={<AtualizaRestaurantes />} />
    </Routes>
  );
}

export default App;
