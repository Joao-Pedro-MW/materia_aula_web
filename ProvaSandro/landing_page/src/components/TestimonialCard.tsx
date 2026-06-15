import Star from "../assets/star.svg";
import StarOuter from "../assets/star-outer.svg";

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  text: string;
}

export default function TestimonialCard({
  image,
  name,
  role,
  text,
}: TestimonialCardProps) {
  return (
    <div className="carousel-card">
      <img src={image} alt={`Imagem perfil de ${name}`} loading="lazy" />
      <span className="testimony">
        <p>{text}</p>
      </span>
      <span className="rating">
        {/* Renderizando 4 estrelas cheias e 1 vazia como no seu layout original */}
        <img
          src={Star}
          alt="ícone estrela"
          width={22}
          height={20}
          loading="lazy"
        />
        <img
          src={Star}
          alt="ícone estrela"
          width={22}
          height={20}
          loading="lazy"
        />
        <img
          src={Star}
          alt="ícone estrela"
          width={22}
          height={20}
          loading="lazy"
        />
        <img
          src={Star}
          alt="ícone estrela"
          width={22}
          height={20}
          loading="lazy"
        />
        <img
          src={StarOuter}
          alt="ícone estrela sem fundo"
          width={20}
          height={22}
          loading="lazy"
        />
      </span>
      <span className="names">
        <p>{name}</p>
        <p>{role}</p>
      </span>
    </div>
  );
}
