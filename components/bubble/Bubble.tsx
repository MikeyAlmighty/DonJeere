import "./Styles.scss";

interface BubbleProps {
  text: string;
  primary?: boolean;
}
export const Bubble = ({ text, primary = true }: BubbleProps) => (
  <div className={primary ? "about-bubble-primary" : "about-bubble-secondary"}>
    <p>{text}</p>
  </div>
);
