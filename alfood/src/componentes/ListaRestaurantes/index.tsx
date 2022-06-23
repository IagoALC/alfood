import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";
import axios from "axios";
import { useEffect, useState } from "react";
import IPrato from "../../interfaces/IPrato";
const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [proximaPagina, setProximaPagina] = useState<string>("");
  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/restaurantes").then((res) => {
        setRestaurantes(res.data.results);
        setProximaPagina(res.data.next);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  function handleProximaPagina() {
    axios.get(proximaPagina).then((res) => {
        setRestaurantes([...restaurantes, ...res.data.results]);
        setProximaPagina(res.data.next);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {restaurantes?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
      {proximaPagina && (
        <button onClick={() => handleProximaPagina()}>Carregar mais</button>
      )}
    </section>
  );
};

export default ListaRestaurantes;
