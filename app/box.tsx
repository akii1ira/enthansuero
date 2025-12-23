import MyImage from "./img";

interface CardProps {
  image: string;
  text: string;
    text2: string;
    text3: string;
    text4: string;
}
export default function CardBox({ text, text2 , text3 , text4, image}:CardProps) {
  return (
    <div className={`${text}`}>
        <div className={`${text2}`}>
            <h1 className="text-3xl">{text3}</h1>
            <p className="w-70 pl-10">{text4}</p>
        </div>
        <MyImage image={image} width={600} height={60} />
    </div>
  );
}
