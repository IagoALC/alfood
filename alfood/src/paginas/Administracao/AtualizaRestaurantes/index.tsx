import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AtualizaRestaurantes() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if(id) {
      axios.get(`http://localhost:8000/api/v2/restaurantes/${id}/`).then(res => {
        setNome(res.data.nome);
      }).catch(err => {console.log(err)});
    }
  }, [id]);

  function handleAtualizaRestaurantes(event: any) {
    if(id) {
      axios.put(`http://localhost:8000/api/v2/restaurantes/${id}/`, { nome }).then(res => {}).catch(err => {console.log(err)});
    }
    navigate('/administracao/restaurantes/');
  }
  
  return (
    <>
      <form onSubmit={handleAtualizaRestaurantes}>
        <TextField id="nome" label="Nome" value={nome} onChange={(event)=> setNome(event.target.value)} variant="outlined" name="nome" />
        <Button variant="contained" type="submit">Cadastrar</Button>
      </form>
    </>
  );
}