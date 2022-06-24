import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AtualizarPratos() {
  const { id } = useParams();
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

  useEffect(() => {
    if(id) {
      axios.get(`http://localhost:8000/api/v2/pratos/${id}/`).then(res => {
        setNome(res.data.nome);
        setTag(res.data.tag);
        setDescricao(res.data.descricao);
        setRestaurante(res.data.restaurante);
    }).catch(err => {console.log(err)});}
  }, []);

  function atualizaPrato() {
    if(id) {
      axios.put(`http://localhost:8000/api/v2/pratos/${id}/`, prato).then(res => {console.log(res)}).catch(err => {console.log(err)});
    }
  }
  return (
    <>
      <form onSubmit={atualizaPrato}>
        <TextField id="nome" label="Nome" value={nome} onChange={(event)=> setNome(event.target.value)} variant="outlined"/>
        <TextField id="tag" label="Tag" value={tag} onChange={(event)=> setTag(event.target.value)} variant="outlined"/>
        <TextField id="descricao" label="Descrição" value={descricao} onChange={(event)=> setDescricao(event.target.value)} variant="outlined"/>
        <TextField id="restaurante" label="Restaurante" value={restaurante} onChange={(event)=> setRestaurante(Number(event.target.value))} variant="outlined"/>
        <Button variant="contained" type="submit">Atualizar</Button>
      </form>
    </>
  );
}