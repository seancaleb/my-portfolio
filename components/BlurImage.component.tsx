import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

type BlurImageProps = {
  src: string;
  alt: string;
  [key: string]: string;
};

const BlurImage = ({ src, alt, ...props }: BlurImageProps) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={clsx(
        "duration-700 ease-in-out",
        isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default BlurImage;
