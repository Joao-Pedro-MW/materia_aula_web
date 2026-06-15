import Logo from "../assets/logo.svg";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Youtube from "../assets/youtube.png";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src={Logo}
            alt="Logo DonaFrost"
            width={150}
            height={50}
            loading="lazy"
          />
          <div className="flex gap-1 footer-socials">
            <a href="#" aria-label="Instagram">
              <img
                src={Instagram}
                alt="ícone Instagram"
                width={24}
                height={24}
                loading="lazy"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                src={Facebook}
                alt="ícone Facebook"
                width={24}
                height={24}
                loading="lazy"
              />
            </a>
            <a href="#" aria-label="Youtube">
              <img
                src={Youtube}
                alt="ícone Youtube"
                width={24}
                height={24}
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Empresa</h3>
          <ul>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Faça parte do time</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Recursos</h3>
          <ul>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Encomendas</a>
            </li>
            <li>
              <a href="#">Vagas</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          Feito com amor na aula de Programação Web
        </p>
      </div>
    </footer>
  );
}
