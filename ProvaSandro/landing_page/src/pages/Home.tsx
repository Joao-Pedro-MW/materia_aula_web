import Logo from "../assets/logo.svg";
import Menu from "../assets/hamburguer.svg";
import Close from "../assets/close.svg";
import Loki from "../assets/loki.png";
import Odin from "../assets/odin.png";
import Thor from "../assets/thor.png";
import Footer from "../components/Footer";
import ProfileImageOne from "../assets/images/profile1.png";
import ProfileImageTwo from "../assets/images/profile2.png";
import TestimonialCard from "../components/TestimonialCard";
import PricingCard from "../components/PricingCard";
import Button from "../components/Button";
import SolutionCard from "../components/SolutionCard";

import "../styles/index.css";
import "../styles/utility.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/button.css";

import { useEffect, useState } from "react";
export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendContactEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        message,
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      throw new Error(body.error ?? "Erro ao enviar mensagem.");
    }
  }
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Deuses</a>
              </li>
              <li>
                <a href="#testimonials">Comunidade</a>
              </li>
              <li>
                <a href="#pricing">Planos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="#">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#solution">Deuses</a>
                    </li>
                    <li>
                      <a href="#testimonials">Comunidade</a>
                    </li>
                    <li>
                      <a href="#pricing">Planos</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>
                  </ul>

                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <div className="container content">
          <p className="desktop-only">Olá</p>
          <h1>Mergulhe nas Lendas dos Deuses Nórdicos</h1>
          <p>
            Explore as histórias épicas de Odin, Thor e Loki. Descubra os
            mistérios de Asgard e a sabedoria dos antigos Vikings.
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se grátis" />
            </span>
            <span className="desktop-only">
              <Button text="Explorar Mitologias" secondary />
            </span>
          </div>
        </div>
      </section>
      <section className="container" id="solution">
        <header>
          <span>
            <h2>Deuses</h2>
            <span className="desktop-only">
              <h2>Principais deuses nórdicos</h2>
            </span>
          </span>
          <p>
            Mergulhe nas histórias épicas de Odin, Thor e Loki. Descubra os
            mistérios de Asgard e a sabedoria dos antigos Vikings. Explore as
            lendas que moldaram a mitologia nórdica e inspire-se com a coragem e
            a astúcia desses deuses lendários.
          </p>
        </header>

        <section className="even-columns">
          <SolutionCard
            icon={Thor}
            iconAlt="ícone campeão"
            title="Thor - O Deus do Trovão"
            description="Protetor de Midgard e um dos deuses mais populares. Thor é conhecido por sua força imensa, seu martelo Mjolnir, e sua luta contra os gigantes do caos"
          />
          <SolutionCard
            icon={Odin}
            iconAlt="ícone campeão"
            title="Odin - O Pai dos Deuses"
            description="Odin é o senhor de Asgard, conhecido por sua busca infinita pelo conhecimento e sua capacidade de ver o passado, presente e futuro."
          />

          <SolutionCard
            icon={Loki}
            iconAlt="ícone campeão"
            title="Loki - O Trapaceiro"
            description="Loki é um personagem complexo, às vezes aliado, às vezes inimigo dos Aesir. Sua natureza mutável o torna impossível de prever."
          />
        </section>
      </section>

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Voz da Comunidade</p>
            <h2>Cada Guerreiro Importa!</h2>
          </span>
          <p>
            Milhares de fãs de mitologia nórdica já exploram nossas histórias
            épicas e participam de nossa comunidade. Confira abaixo os
            depoimentos de quem já descobriu as lendas de Asgard conosco.
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
            <TestimonialCard
              image={ProfileImageOne}
              name="Xanaina"
              role="Leitora"
              text="Loki é meu favorito e aqui há conteúdo que explora a complexidade desse deus de forma única. Discussões respeitosas e bem fundamentadas. Muito bom!"
            />
            <TestimonialCard
              image={ProfileImageTwo}
              name="Joelma Santos"
              role="Leitora"
              text="Finalmente encontrei um lugar onde posso explorar mitologia nórdica com profundidade! Os artigos sobre Odin e sua busca pela sabedoria mudaram minha perspectiva. A comunidade é incrível"
            />
          </div>
          <div className="carousel-content">
            <TestimonialCard
              image={ProfileImageOne}
              name="John Cena"
              role="Leitor"
              text="As análises sobre Thor e o Ragnarok são simplesmente épicas. Adorei os webinars exclusivos com especialistas. Recomendo para todo fã de mitologia"
            />
            <TestimonialCard
              image={ProfileImageTwo}
              name="Ryan Gosling"
              role="Agrônomo"
              text="Finalmente encontrei um lugar onde posso explorar mitologia nórdica com profundidade! Os artigos sobre Odin e sua busca pela sabedoria mudaram minha perspectiva. A comunidade é incrível"
            />
          </div>
        </section>
      </section>

      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>

        <section className="even-columns gap-1.5">
          <PricingCard
            title="Iniciante"
            description="Comece sua jornada em Asgard. Acesso básico às histórias dos deuses nórdicos."
            price="Grátis"
            buttonText="Começar Agora"
            features={[
              "Reviews básicos de obras",
              "Acesso à comunidade",
              "5 artigos por mês",
            ]}
          />

          <PricingCard
            title="Mitólogo"
            description="Para quem deseja explorar profundamente. Acesso completo e sem anúncios."
            price="R$ 19,90"
            period="/mês"
            buttonText="Pedir agora"
            isPremium={true}
            bonusText="1º MÊS COM DESCONTO"
            features={[
              "Tudo do plano Iniciante +",
              "Enciclopédia Nórdica completa",
              "Sem anúncios",
            ]}
          />

          <PricingCard
            title="Guerreiro"
            description="Para verdadeiros guerreiros. Acesso total e comunidade exclusiva de Asgard."
            price="R$ 49,90"
            period="/mês"
            buttonText="Baixar agora"
            features={[
              "Tudo do Mitólogo +",
              "Comunidade VIP exclusiva",
              "Acesso ilimitado a conteúdo",
            ]}
          />
        </section>
      </section>

      <section id="contact" className="container">
        <header>
          <p className="desktop-only">Envie sua dúvida</p>
          <h2>Entre em contato</h2>
          <p>
            Tem alguma dúvida sobre mitologia nórdica ou sobre nossos planos?{" "}
            <br></br> Estamos aqui para ajudar! Entre em contato conosco e
            exploraremos Asgard juntos.
          </p>
        </header>

        <form className="contact-form" onSubmit={(e) => sendContactEmail(e)}>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor Email"
            required
          />
          <textarea
            name="message"
            placeholder="Motivo do contato. Ex: qual o valor de..."
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <Button text="Enviar" />
        </form>
      </section>

      <Footer />
    </>
  );
}
