import Image from "next/image";

interface MyImageProps {
  image?: string | null;
  width: number;
  height: number;
  alt?: string;
}

const BASE = "https://payload-1-vowz.onrender.com";

export default function MyImage({ image, width, height, alt }: MyImageProps) {
  if (!image) return null;

  let url = image;


  if (url.startsWith("/")) url = BASE + url;


  url = url.replace("/globals/header-settings", "/api/media/file");

  return (
    <Image
      src={url}
      alt={alt || "Image"}
      width={width}
      height={height}
      className="object-contain"
    />
  );
}
