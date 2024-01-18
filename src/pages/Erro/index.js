import { Link } from "react-router-dom";
import "./erro.css";

function Erro(params) {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>página não encontrada</h2>
            <Link to="/">veja todos os filmes</Link>
        </div>
    )
}

export default Erro;