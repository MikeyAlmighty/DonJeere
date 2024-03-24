import { useState } from 'react';
import Image from 'next/image';

interface BlurredImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const BlurredImage = ({ src, alt, width, height }: BlurredImageProps) => {
  const [loaded, setLoaded] = useState<Boolean>(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div style={{ position: 'relative', width, height }}>
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            filter: 'blur(20px)',
            background: `url(${src})`,
            backgroundSize: 'cover',
            zIndex: 1,
          }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        loading={"lazy"}
        height={height}
        onLoad={handleLoad}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s', borderRadius: '25px' }}
      />
    </div>
  );
};

export default BlurredImage;
