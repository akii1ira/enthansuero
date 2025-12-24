
interface CardProps {
  num: string;
  text: string;
  name:string;
}
export default function Card({ num, name ,text }:CardProps) {
  return (
    <div className="w-100 p-5 border-black border-2 h-130 pt-90">
      <div className="flex ">
        <p className="text-gray-500">{num}</p>
        <h1 className="text-black text-2xl font-medium">{name}</h1>
      </div>
      <h1 className="text-black text-xl w-93 mt-5">{text}</h1>
    </div>
  );
}
