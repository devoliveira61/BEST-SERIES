import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css'

function Home() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSeries() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "a00344a26e6afe6a3bc5fa838a5b0aba",
          language: "pt-BR",
          page: 1,
        },
      });
      // console.log(response.data.results.slice(0, 10));
      setSeries(response.data.results.slice(0, 10));
      setLoading(false);
    }

    loadSeries();
  }, []);

  if(loading) {
    return(
      <div className="loading">
        <h2>Carregando...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="listaSeries">
        {series.map((serie) => {
          return (
            <article key={serie.id}>
              <strong>{serie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`}
                alt={serie.title}
              />
              <Link to={`/serie/${serie.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
