import Logo from "../assets/logo.svg";
import Menu from "../assets/hamburguer.svg";
import Close from "../assets/close.svg";
import Champion from "../assets/champion.svg";
import Footer from "../components/Footer";

import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import ProfileImageOne from "../assets/images/profile1.png";
import ProfileImageTwo from "../assets/images/profile2.png";
import TestimonialCard from "../components/TestimonialCard";
import PricingCard from "../components/PricingCard";

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

import Button from "../components/Button";
import SolutionCard from "../components/SolutionCard";
import { useEffect, useState } from "react";

export default function Home() {
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
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
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
                      <a href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
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
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

        <div className="container content">
          <p className="desktop-only">Olá</p>
          <h1>
            Comida de mãe direto no seu apê, é só pedir que entregamos para
            você!
          </h1>
          <p>
            Já pensou em matar a saudade daquela comida caseira? O melhor de
            tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <header>
          <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
              <h2>Sob medida para você</h2>
            </span>
          </span>
          <p>
            Inovação é com a gente! A <strong>DonaFrost</strong> já conquistou
            diversos clientes, seja você mais um deles, veja tudo que pode
            ganhar com nossos serviços.
          </p>
        </header>

        <section className="even-columns">
          <SolutionCard
            icon={Champion}
            iconAlt="ícone campeão"
            title="Produto Vencedor"
            description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
          />

          <SolutionCard
            icon={Champion}
            iconAlt="ícone campeão"
            title="Produto Vencedor"
            description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
          />

          <SolutionCard
            icon={Champion}
            iconAlt="ícone campeão"
            title="Produto Vencedor"
            description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
          />
        </section>
      </section>

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Conselho de quem conhece</p>
            <h2>Cada cliente importa!</h2>
          </span>
          <p>
            Quem já pediu sabe da qualidade das nossas receitas, estamos tirando
            aquela ideia de que comida congelada tem de ser algo sem gosto,
            acompanhe abaixo os testemunhos de quem já comprou e aprovou.
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
            <TestimonialCard
              image={ProfileImageOne}
              name="Ellon Ma"
              role="CEO BING CHILLING"
              text="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />
            <TestimonialCard
              image={ProfileImageTwo}
              name="Ryan Gosling"
              role="Agrônomo"
              text="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />
          </div>
          <div className="carousel-content">
            <TestimonialCard
              image={ProfileImageOne}
              name="Ellon Ma"
              role="CEO BING CHILLING"
              text="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />
            <TestimonialCard
              image={ProfileImageTwo}
              name="Ryan Gosling"
              role="Agrônomo"
              text="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
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
            title="Básico"
            description="Você tem direito a uma prova das comidas DonaFrost."
            price="Grátis"
            buttonText="Pedir agora"
            features={[
              "Retire na loja",
              "Apenas 1 por CPF",
              "Pacote mais simples",
            ]}
          />

          <PricingCard
            title="Premium"
            description="Para quem precisa de uma marmita diária, muito saborosa."
            price="R$ 89,90"
            period="/mês"
            buttonText="Pedir agora"
            isPremium={true}
            bonusText="1º MÊS COM DESCONTO"
            features={[
              "2 Entregas",
              "5 Refeições por semana",
              "2 Sucos por semana",
            ]}
          />

          <PricingCard
            title="Empresarial"
            description="Utilize nossa solução na sua empresa. Aprimore seu fluxo."
            price="R$ 12,90"
            period="/mês"
            buttonText="Baixar agora"
            features={[
              "Com anúncios",
              "Até 10 produtos por dia",
              "Utilize sem limitação X",
            ]}
          />
        </section>
      </section>

      <section id="contact" className="container">
        <header>
          <p className="desktop-only">Envie sua dúvida</p>
          <h2>Entre em contato</h2>
          <p>Entre em contato, estamos dispostos a tirar qualquer dúvida.</p>
        </header>

        <form className="contact-form">
          <input
            type="email"
            name="email"
            placeholder="Seu melhor Email"
            required
          />
          <textarea
            name="message"
            placeholder="Motivo do contato. Ex: qual o valor de..."
            rows={4}
            required
          ></textarea>
          <Button text="Enviar" />
        </form>
      </section>

      <Footer />
    </>
  );
}
