import { BrowserRouter as Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logo from '/src/assets/logo.png';

function Header() {
    return(
        <div className="navbar">
            <div className="container">
                <header>
                    <img src={logo} className="logo"></img>
                    <a as={Link} href="/" className="nome">JOGATINA</a>
                    <nav>
                        <a as={Link} href="/games" className="itens-menu">Jogos</a>
                    </nav>
                    <div>
                        <div>
                            <a as={Link} href="/signup" className="itens-menu2">Cadastro</a>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header;