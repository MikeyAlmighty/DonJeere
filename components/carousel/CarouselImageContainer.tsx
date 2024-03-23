import Image from "next/image";

export const CarouselImageContainer = ({ headline, image }) => (
  <div className="slide">
    <Image className="image-container" src={image} alt={headline} width={500} height={400}/>
    <div className="slide-content">
      <h2>{headline}</h2>
    </div>
  </div>
);
