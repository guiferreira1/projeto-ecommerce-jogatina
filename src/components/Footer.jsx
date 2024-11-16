import React from "react";
import logo from '../assets/logo.png';

function Footer() {
    return(
        <footer>
            <div className="footer">
                <div className="fesquerda email-container">
                    <h2>Mande uma Mensagem</h2>
                    <input type="email" id="emailInput" placeholder="Digite seu e-mail" required/>
                    <input type="text" id="subjectInput" placeholder="Digite o assunto" required/>
                    <textarea id="messageInput" placeholder="Escreva sua descrição" rows="5" required/>
                    <button type="submit">Enviar</button>
                    
                    </div>
                <div className="fdireita">
                    <div className="contatos">
                        <tr><b>Email</b></tr>
                        <td> jogatinaoficial@gmail.com</td>
                    </div>
                    <div className="contatos">
                        <tr><b>Instagram</b></tr>
                        <td>jogatinaoficial</td>
                    </div>
                    <div className="contatos">
                        <tr><b>Facebook</b></tr>
                        <td>jogatinaofc</td>
                    </div>
                    <div className="contatos">
                        <tr><b>Linkedin</b></tr>
                        <td>jogatinaoficial</td>
                    </div>
                </div>
            </div>
            <div className="footer2">
                <img src={logo} class="logo" />
                <div>
                    <div className="itens-footer">JOGATINA © </div>
                </div>
                <div>
                    <div className="itens-footer2">Copyright © 2024. Todos os Direitos Reservados</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;