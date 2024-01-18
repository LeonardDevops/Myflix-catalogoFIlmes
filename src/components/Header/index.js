import { Link } from "react-router-dom";
import "./style.css";

function Header(params) {
    return (
            <header>
            <Link className="Logo" to="/">MyFLix</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
            </header>

    );

}

 export default Header;