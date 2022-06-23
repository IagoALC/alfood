import { TableBody, TableCell, TableContainer, TableRow, Table, TableHead } from "@mui/material";
import { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";
import axios from "axios";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from "react-router-dom";

export default function AdministracaoRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>();
  useEffect(() => {
    axios.get("http://localhost:8000/api/v2/restaurantes/").then(resposta => {
      setRestaurantes(resposta.data);
    });
  }, [restaurantes]);

  function excluirRestaurante(id: number) {
    axios.delete(`http://localhost:8000/api/v2/restaurantes/${id}/`).then(resposta => {alert('Restaurante excluído com sucesso!')});
  }
  return (
    <>
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