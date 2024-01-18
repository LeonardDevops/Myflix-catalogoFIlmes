import axios from "axios";
//base da url: https://api.themoviedb.org/3
//https://api.themoviedb.org/3/movie/now_playing?api_key=76ed3ced7fe80a4e6dd3975a2586fb4c&language=pt-BR


const api = axios.create({
   baseURL:' https://api.themoviedb.org/3/' 
});



export default api;