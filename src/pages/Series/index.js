import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./serie.css";
import { toast } from "react-toastify";

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
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });

      return () => {};
    }
    loadSerie();
  }, [navigate, id]);

  function salvarSerie() {
    const minhaLista = localStorage.getItem("@serieFlix");

    let seriesSalvas = JSON.parse(minhaLista) || [];

    const hasSeries = seriesSalvas.some(
      (seriesSalvas) => seriesSalvas.id === serie.id
    );

    if (hasSeries) {
      toast.error("Este filme já está na listas", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    seriesSalvas.push(serie);
    localStorage.setItem("@serieFlix", JSON.stringify(seriesSalvas));
    toast.success("O filme foi salvo com sucesso", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

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
        <button onClick={salvarSerie}>Salvar</button>
        <button>
          <a
            href={`https://youtube.com/results?search_query=${serie.title}`}
            rel="external"
            target="blank"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Series;
