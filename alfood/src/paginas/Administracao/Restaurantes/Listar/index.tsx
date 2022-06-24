import { TableBody, TableCell, TableContainer, TableRow, Table, TableHead, TextField, InputLabel, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import IRestaurante from "../../../../interfaces/IRestaurante";
import axios from "axios";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

export default function AdministracaoRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>();
  const [pesquisarRestaurante, setPesquisarRestaurante] = useState<string>("");
  const [filtroRestaurante, setFiltroRestaurante] = useState<string>("1");
  const filtros = [{value: '1', nome: 'id'}, {value: '2', nome: 'nome'}];
  useEffect(() => {
      axios.get("http://localhost:8000/api/v2/restaurantes/").then(resposta => {
          const regex = new RegExp(pesquisarRestaurante, "i");
          const tipoFiltro = filtroRestaurante === "1" ? "id" : "nome";
          setRestaurantes(resposta.data.filter((restaurante: any) => regex.test(restaurante.nome)).sort((a: any, b: any) => filtroRestaurante === '1' ? a.id > b.id : a.nome > b.nome ? 1 : -1));
      });
  }, [restaurantes]);

  function excluirRestaurante(id: number) {
    axios.delete(`http://localhost:8000/api/v2/restaurantes/${id}/`).then(resposta => {alert('Restaurante excluído com sucesso!')});
  }
  return (
    <>
    <TextField id="pesquisar" label="Nome do restaurante" value={pesquisarRestaurante} onChange={(event) => setPesquisarRestaurante(event.target.value)} variant="outlined" name="nome" />
    <InputLabel id="demo-simple-select-label">Age</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="select"
      value={filtroRestaurante}
      label="Age"
      onChange={(event) => setFiltroRestaurante(event.target.value)}
    >
      {filtros.map((filtro: any) => (
        <MenuItem key={filtro.value} value={filtro.value}>{filtro.nome}</MenuItem>
      ))}
    </Select>
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Editar</TableCell>
            <TableCell align="right">Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes?.map((restaurante) => (
            <TableRow key={restaurante.id}>
              <TableCell component="th" scope="row">{restaurante.nome}</TableCell>
              <TableCell component="th" scope="row" align="right">
                <Link to={`/administracao/restaurantes/${restaurante.id}`}><SyncAltIcon/></Link>
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                <Link to={''} onClick={() => excluirRestaurante(restaurante.id)}><DeleteIcon/></Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}