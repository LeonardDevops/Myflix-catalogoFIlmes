import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import "./filme.css";




function  Filme(params) {
    const {id} = useParams();
    const navigate = useNavigate(true);

    const [filme ,setFilme] = useState({});
    const [loading , setLoading] = useState (true);


    useEffect(()=> {
        async function loadFilme() {
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "76ed3ced7fe80a4e6dd3975a2586fb4c",
                language: "pt-BR",
                page:1,
                }
            }).then((response)=>{
                setFilme(response.data);
                setLoading(false)
            }).catch(()=>{
                navigate("/", {replace:true}); // usando um hook de navegação passando o paramêtro
                return;// nesse caso mandando pra minha home que foi definida no router
            })
        }
        loadFilme();

        return () => {
            
        }

        
    }, [navigate, id]);

    
    function salvarFilme() {
        let minhaLista = localStorage.getItem("@myFlix");
        
        let  filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (salvo) => salvo.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme já está na lista");
            return;
        } 

        filmesSalvos.push(filme);
        localStorage.setItem("@myFlix",JSON.stringify(filmesSalvos));
        toast.success("filme salvo com sucesso!")
    
        
        
    
}

    if(loading){
        return (
            <div className="filme-info">
                <h1>carregando Detalhes</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
       <h1>{filme.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
       <h3>Sinopse</h3>
       <span>{filme.overview}</span>
       <strong>Avaliação:<p>{filme.vote_average}★</p></strong>
    
        <div className="area-button">
        <button onClick={salvarFilme} className="button" type="button">Salvar</button>
        <button className="button">
            <a href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`} target="blank">Trailer</a>
        </button>
        </div>

        </div>
    )
}

export default Filme;