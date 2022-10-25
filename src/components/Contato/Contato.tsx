import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import './style.scss';

export function Contato(): JSX.Element {
  return (
    <div className="contact-container">
      <div className="contact-bar">
        <p>Entre em contato</p>
      </div>
      <div className="contact-contents">
        <p>
          Obrigado pela visita! para mais contatos segue minha redes sociais
        </p>
        <div className="links">
          <a href="https://github.com/vitorbelarmino">
            <GithubLogo
              size={35}
              color="#fcfcfc"
              weight="light"
              className="icons"
            />
          </a>
          <a href="https://www.linkedin.com/in/vitor-belarmino/">
            <LinkedinLogo
              size={35}
              color="#fcfcfc"
              weight="light"
              className="icons"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
