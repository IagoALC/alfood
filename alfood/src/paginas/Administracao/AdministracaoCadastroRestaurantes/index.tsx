import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdministracaoCadastroRestaurantes() {
  const navigate = useNavigate();
  const [nome, setNome] = useState<string>("");
  function criarRestaurante(event: any) {
    setNome(event.target.nome.value);
    navigate("/administracao/restaurantes");
  }
  useEffect(() => {
    axios.post("http://localhost:8000/api/v2/restaurantes/", { nome }).then(resposta => {});
  }, [nome]);
  
  return (
    <>
      <form onSubmit={criarRestaurante}>
        <TextField id="nome" label="Nome" value={nome} onChange={(event)=> setNome(event.target.value)} variant="outlined" name="nome" />
        <Button variant="contained" type="submit">Cadastrar</Button>
      </form>
    </>
  );
}
