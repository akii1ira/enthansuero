import Image from "next/image";

interface CardProps {
  image: string;
  width: number;
  height: number;
}
export default function MyImage({ image, width, height }:CardProps) {
  return (
      <Image
        src={`${image}`}
        alt="Project image"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
  );
}
