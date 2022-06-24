import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CriarPratos() {
  const navigate = useNavigate();
  const [nome, setNome] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [restaurante, setRestaurante] = useState<number>(0);
  const prato = { 
    "nome": nome, 
    "tag": tag,
    "descricao": descricao,
    "restaurante": restaurante 
  };

  function criarPrato() {
    axios.post('http://localhost:8000/api/v2/pratos/', prato).then(resposta => {console.log(resposta)});
    navigate("/administracao/pratos/lista");
  }

  return (
    <>
      <form onSubmit={criarPrato}>
        <TextField id="nome" label="Nome" value={nome} onChange={(event)=> setNome(event.target.value)} variant="outlined"/>
        <TextField id="tag" label="Tag" value={tag} onChange={(event)=> setTag(event.target.value)} variant="outlined"/>
        <TextField id="descricao" label="Descrição" value={descricao} onChange={(event)=> setDescricao(event.target.value)} variant="outlined"/>
        <TextField id="restaurante" label="Restaurante" value={restaurante} onChange={(event)=> setRestaurante(Number(event.target.value))} variant="outlined"/>
        <Button variant="contained" type="submit">Cadastrar</Button>
      </form>
    </>
  );
}