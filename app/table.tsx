
interface CardProps {
  text: string;
    text2: string;
    text3: string;
    text4: string;
}
export default function MyTAble({ text, text2 , text3 , text4}:CardProps) {
  return (
   <div className="text-black flex space-x-4 pt-5 pb-5">
        <div className="w-70"><h1 className="w-70">{text}</h1></div>
        <div className="ml-20 w-130"><h1 className="w-50">{text2}</h1></div>
        <div className="ml-10 w-140"><h1 >{text3}</h1></div>
        <div className="ml-40 text-right" ><h1>{text4}</h1></div>
    </div>
  );
}
