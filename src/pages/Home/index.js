import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

//https://api.themoviedb.org/3/movie/now_playing?api_key=76ed3ced7fe80a4e6dd3975a2586fb4c&language=pt-BR
function Home(params) {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> { // pra quando carregar a página ele  carregar o meu useState
       async function loadFilmes(){ // criei uma função  asyncrona que uma função que espera 
        const response = await api.get("movie/now_playing", { // aqui  nessa função criei uma variável que recebe a api.get("", params:{})
            params:{
                api_key: "76ed3ced7fe80a4e6dd3975a2586fb4c",
                language: "pt-BR",
                page:1,
            }
        })

        console.log(response.data.results.slice(0,10));
        setFilmes(response.data.results.slice(0,10));
        
       
            setLoading(false)
       
            
    }

       loadFilmes();
    },[]);

if(loading) {
    return(
        <div className="loading">
         <h2>carregando filmes....</h2>
         </div>
    )
} 

    return (
<div className="container">
    <div className="lista-filmes">
        {filmes.map((filmes)=> {
            return (
                <article key={filmes.id}>
                    <strong>{filmes.title}</strong>
                    <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`} alt={filmes.title} />
                    <Link to={`/filme/${filmes.id}`}>Acessar</Link>
                </article>
            );
        })}

    </div>
</div>
    );
}

export default Home;