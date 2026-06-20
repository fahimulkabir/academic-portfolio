import { useEffect, useState } from "react";
import "../styles/slider.css";
import { getAssetUrl } from "../utils/getAssetUrl";

type ImageSliderProps = {
  images: string[];
  interval?: number; // autoplay interval (ms)
};

export default function ImageSlider({
  images,
  interval = 4000, // default 4 seconds
}: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const normalizedImages = images.map(getAssetUrl);

  // 👉 Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="slider">
      {/* <img src={images[index]} alt={`Slide ${index + 1}`} /> */}
      <img src={normalizedImages[index]} alt={`Slide ${index + 1}`} />

      {/* Controls */}
      <button onClick={prev}>‹</button>

      <button onClick={next}>›</button>
    </div>
  );
}
