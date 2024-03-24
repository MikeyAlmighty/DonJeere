import BlurredImage from "../blurred-image/BlurredImage";

interface CarouselImageContainerProps {
  headline: string;
  image: string;
  alt: string;
}

export const CarouselImageContainer = ({
  headline,
  image,
  alt,
}: CarouselImageContainerProps) => (
  <div className="image-container">
    <BlurredImage src={image} alt={alt} width={500} height={400} />
    <h2>{headline}</h2>
  </div>
);
