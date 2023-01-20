import { useEffect, useState } from "react";
import api from "../../services/api";

function Home() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function loadSeries() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "a00344a26e6afe6a3bc5fa838a5b0aba",
          language: "pt-BR",
          page: 1,
        },
      });
      console.log(response.data.results);
    }

    loadSeries();
  }, []);

  return (
    <div>
      <h1>Olá:</h1>
    </div>
  );
}

export default Home;
