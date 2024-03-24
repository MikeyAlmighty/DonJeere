import "./Styles.scss";
import BlurredImage from "../../blurred-image/BlurredImage";

export const Landing = () => {
  return (
    <span>
      <div className="landingContainer">
        <h1 className="slide-in-left">Welcome to Don Jeere</h1>
        <p className="slide-in-right">For all your Tractoring needs!</p>
        <BlurredImage
          src="https://picsum.photos/399"
          alt="Tractor loading GIF"
          width={400}
          height={400}
        />
      </div>
    </span>
  );
};
