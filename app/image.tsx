interface CardProps {
  num: number;
  text: string;
  name:string;
}
export default function Card({ num, name ,text }:CardProps) {
  return (
    <div className="w-100 p-5 border-black dark:border-gray-500 border-2 h-130 pt-90">
      <div className="flex ">
        <p className="text-gray-500 dark:text-white">{`0${num}/`}</p>
        <h1 className="text-black dark:text-white text-2xl font-medium">{name}</h1>
      </div>
      <h1 className="text-black dark:text-white text-xl w-93 mt-5">{text}</h1>
    </div>
  );
}
