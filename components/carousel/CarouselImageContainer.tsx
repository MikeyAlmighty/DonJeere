import BlurredImage from "../blurred-image/BlurredImage";

interface CarouselImageContainerProps {
   headline: string;
    image: string;
    alt: string;
}

export const CarouselImageContainer = ({ headline, image, alt }: CarouselImageContainerProps) => (
  <div className="slide">
    <BlurredImage
        src={image}
        alt={alt}
        width={500}
        height={400}
    />
    <div className="slide-content">
      <h2>{headline}</h2>
    </div>
  </div>
);
