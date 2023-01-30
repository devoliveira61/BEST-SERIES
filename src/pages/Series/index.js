import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./serie.css";

function Series() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [serie, setSerie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSerie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "a00344a26e6afe6a3bc5fa838a5b0aba",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setSerie(response.data);
          setLoading(false);
        }).catch(() => {
          navigate("/", { replace: true });
          return;
        })

      return () => {};
    }
    loadSerie();
  }, [navigate, id]);

  if (loading) {
    return (
      <div className="serie__info">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="serie__info">
      <h1>{serie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`}
        alt={serie.title}
      />
      <h3>Sinopse</h3>
      <span>{serie.overview}</span>
      <strong> Avaliação: {serie.vote_average} / 10</strong>

      <div className="area__buttons">
        <button>Salvar</button>
        <button>
          <a href={`https://youtube.com/results?search_query=${serie.title}`} rel="external" target="_blank">Trailer</a>
        </button>
      </div>
    </div>
  );
}

export default Series;
