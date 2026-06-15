import Check from "../assets/check.svg";
import Button from "./Button";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period?: string; // Ex: "/mês"
  buttonText: string;
  features: string[];
  isPremium?: boolean;
  bonusText?: string;
}

export default function PricingCard({
  title,
  description,
  price,
  period,
  buttonText,
  features,
  isPremium = false,
  bonusText,
}: PricingCardProps) {
  return (
    <div className={`pricing-card ${isPremium ? "premium" : ""}`}>
      {bonusText && (
        <span className="bonus">
          <p>{bonusText}</p>
        </span>
      )}
      <span className="plan">
        <h3>{title}</h3>
        <p>{description}</p>
      </span>

      {price === "Grátis" ? (
        <h2>{price}</h2>
      ) : (
        <span className="price">
          <h2>{price}</h2>
          {period && <p>{period}</p>}
        </span>
      )}

      <Button text={buttonText} secondary={!isPremium} />
      <span className="hr" />

      {/* Lista padronizada para as funcionalidades */}
      <ul className={isPremium ? "" : "features-list"}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-1">
            <img
              src={Check}
              alt="ícone check"
              width={24}
              height={24}
              loading="lazy"
            />
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
