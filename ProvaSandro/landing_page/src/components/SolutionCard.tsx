interface SolutionCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export default function SolutionCard({
  icon,
  iconAlt,
  title,
  description,
}: SolutionCardProps) {
  return (
    <div className="card">
      <span>
        <img src={icon} alt={iconAlt} width={64} height={64} loading="lazy" />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <hr />
      </div>
    </div>
  );
}
