import "./Styles.scss";

interface CardProps {
  description: string;
  primary?: boolean;
}

export const Card = ({ description, primary = true }: CardProps) => (
    <div>
      <p className={primary ? "card-primary" : "card-secondary"}>{description}</p>
    </div>
);
