import { Box, Button, TextField, Typography } from "@mui/material";
import http from "../../../../http";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdministracaoCadastroRestaurantes() {
  const navigate = useNavigate();
  const [nome, setNome] = useState<string>("");
  function criarRestaurante(event: any) {
    event.preventDefault();
    http.post("api/v2/restaurantes/", { nome }).then(resposta => {});
    navigate("/administracao/restaurantes/lista");
  }
  
  return (
    <Box sx={{display: 'flex', flexDirection:"column", alignItems:"center"}}>
      <Typography component="h1" variant="h6">Cadastro de restaurantes</Typography>
      <form onSubmit={(event) => criarRestaurante(event)}>
        <TextField id="nome" label="Nome" value={nome} onChange={(event)=> setNome(event.target.value)}  variant="standard" name="nome" fullWidth required />
        <Button variant="contained" type="submit">Cadastrar</Button>
      </form>
    </Box>
  );
}
