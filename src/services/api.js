import axios from "axios";

// Base URL https://api.themoviedb.org/3/
// URL da API https://api.themoviedb.org/3/movie/now_playing?api_key=a00344a26e6afe6a3bc5fa838a5b0aba&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;