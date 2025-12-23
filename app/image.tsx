import Image from "next/image";

interface CardProps {
  image: string;
  text: string;
}
export default function Card({ image, text }:CardProps) {
  return (
    <div className="w-100 p-5 border-black border-2 h-130 pt-90">
      <Image
        src={image}
        alt="Project image"
        width={400}
        height={60}
        className="object-contain"
        priority
      />
      <h1 className="text-black text-xl w-93 mt-5">{text}</h1>
    </div>
  );
}
