import React, { useState, useEffect } from "react";
import axios from "axios";

interface ImageProps {
  existingUrl?: string;
}

export const ImageComponent = ({ existingUrl }: ImageProps) => {
  const [imageUrl, setImageUrl] = useState<string>(existingUrl);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get("https://picsum.photos/200");
        setImageUrl(response.request.responseURL);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();

    // Cleanup function to cancel any ongoing requests
    return () => {};
  }, []);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="placeholder Image" />}
      {!imageUrl && <p>Loading...</p>}
    </div>
  );
};
