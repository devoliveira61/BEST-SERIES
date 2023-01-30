import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";
import { toast } from 'react-toastify';


function Favoritos() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@serieFlix");
    setSeries(JSON.parse(minhaLista) || []);
  }, []);

  function exluirSerie(id) {
    let filterSeries = series.filter((item) => {
      toast.success("O filme foi removido com sucesso", {
        position: toast.POSITION.TOP_CENTER
      });
      return item.id !== id;
    });

    setSeries(filterSeries);
    localStorage.setItem("@serieFlix", JSON.stringify(filterSeries));
  }

  return (
    <div className="minhas-series">
      <h1>Seus filmes favoritos</h1>

    {series.length === 0 && < span>Nenhum filme favorito salvo</span>}

      <ul>
        {series.map((item) => {
          return (
            <div className="position">
            <li key={item.id}>
              <span>{item.title}</span>
              <div className="buttons">
                <Link to={`/serie/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => exluirSerie(item.id)}>Deletar</button>
              </div>
            </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
