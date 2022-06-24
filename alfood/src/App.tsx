import AdministracaoRestaurantes from "./paginas/Administracao/Restaurantes/Listar";
import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";
import AdministracaoCadastroRestaurantes from "./paginas/Administracao/Restaurantes/Criar";
import AtualizaRestaurantes from "./paginas/Administracao/Restaurantes/Atualizar";
import { Container } from "@mui/system";
import ListarPratos from "./paginas/Administracao/Pratos/Listar";
import CriarPratos from "./paginas/Administracao/Pratos/Criar";
import AtualizarPratos from "./paginas/Administracao/Pratos/Atualizar";

function App() {
  return (
    <Container fixed>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurantes" element={<VitrineRestaurantes />} />
          <Route path="/administracao/">
            <Route path="restaurantes/">
              <Route path="lista" element={<AdministracaoRestaurantes />} />
              <Route path="novo" element={<AdministracaoCadastroRestaurantes />} />
              <Route path=":id" element={<AtualizaRestaurantes />} />
            </Route>
            <Route path="pratos/">
              <Route path="lista" element={<ListarPratos />} />
              <Route path="cadastrar" element={<CriarPratos />} />
              <Route path=":id" element={<AtualizarPratos />} />
            </Route>
          </Route>
      </Routes>
    </Container>
  );
}

export default App;
