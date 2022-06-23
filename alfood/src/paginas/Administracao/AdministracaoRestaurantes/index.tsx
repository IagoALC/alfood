import { TableBody, TableCell, TableContainer, TableRow, Table } from "@mui/material";
import { useEffect, useState } from "react";
import IRestaurante from "interfaces/IRestaurante";
import axios from "axios";

export default function AdministracaoRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>();
  useEffect(() => {
    axios.get("http://localhost:8000/api/v2/restaurantes/").then(resposta => {
      setRestaurantes(resposta.data);
    });
  }, []);
  return (
    <>
      <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableBody>
          {restaurantes?.map((restaurante) => (
            <TableRow key={restaurante.id}>
              <TableCell component="th" scope="row">{restaurante.nome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}