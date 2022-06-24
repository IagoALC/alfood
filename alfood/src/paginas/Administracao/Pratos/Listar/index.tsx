import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import IPrato from '../../../../interfaces/IPrato';

export default function ListarPratos() {
  const [pratos, setPratos] = useState<IPrato[]>([]);
  useEffect(() => {
    axios.get<IPrato[]>("http://localhost:8000/api/v2/pratos/").then(resposta => {setPratos(resposta.data);});
  }, [pratos]);

  function excluirPrato(id: number) {
    axios.delete(`http://localhost:8000/api/v2/pratos/${id}/`).then(resposta => {alert("Prato excluído com sucesso!");});
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
            {pratos?.map((prato) => (
              <TableRow key={prato.id}>
                <TableCell component="th" scope="row">{prato.nome}</TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Link to={`/administracao/pratos/${prato.id}`}><SyncAltIcon/></Link>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Link to={''} onClick={() => excluirPrato(prato.id)}><DeleteIcon/></Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/administracao/pratos/cadastrar">Cadastrar Prato</Link>
    </>
  );
}