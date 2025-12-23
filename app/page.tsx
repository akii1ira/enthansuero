import Card from "./image";
import { cardsData } from "./data/cardsData";
import MyImage from "./img";
import CardBox from "./box";
import MyTAble from "./table";

export default function Home() {
  return (
    <div className="flex  min-h-screen bg-zinc-50  " >
      <main className=" w-screen  py-5 px-16 ">
        <header className="flex ">;
          <MyImage image={cardsData[0].image} width={100} height={30} />
          <div className="flex space-x-8 text-sm font-medium ml-200 ">
            <h1 className="mt-4 text-gray-900">HOME</h1>
            <h1 className="mt-4 text-gray-900">WORK</h1>
            <h1 className="mt-4 text-gray-900">CONTACT</h1>
            <h1 className="text-center bg-black p-3.5 px-5 rounded-xl text-white mt-0">SCHEDULE A CALL</h1>
          </div>
        </header>
        <section className="mt-20 ">
          <div className="ml-120">
            <MyImage image={cardsData[1].image} width={900} height={30} />
          </div>
        </section>
        <section>
          <h1 className="mt-40 text-gray-900 ml-220 text-xs">WORK SEEN ON</h1>
          <div className="mt-10 ml-120">
            <MyImage image={cardsData[2].image} width={900} height={60} />
          </div>
        </section>
        <section>
          <div className="mt-60 ml-120">
            <MyImage image={cardsData[3].image} width={900} height={60} />
          </div>
        </section>
        <section>
          <CardBox text="mt-130  flex justify-between pr-20" text2="text-left p-20 text-black" text3="HOUSTON EXPONENTIAL" text4={cardsData[4].text} image={cardsData[4].image}  />
          <CardBox text="mt-60  flex flex-row-reverse justify-between pr-20 pl-20" text2="text-left p-20 text-black w-160 pl-30" text3="NAMI ML" text4={cardsData[5].text} image={cardsData[5].image}  />
          <CardBox text="mt-60  flex justify-between pr-20" text2="text-left p-20 text-black" text3="THIN REEL" text4={cardsData[6].text} image={cardsData[6].image}/>

        </section>
        <section className="mt-60 flex space-x-70">
          <h1 className="text-black">MORE PROJECTS</h1>
          <MyImage image={cardsData[7].image} width={900} height={60} />
        </section>
        <section className="mt-50 pl-120">
          <MyImage image={cardsData[8].image} width={900} height={60} />
        </section>
        <section className="mt-30 p-10">
          <div className="flex space-x-5">
           <Card  image={cardsData[9].image} text={cardsData[9].text} />
           <Card  image={cardsData[10].image} text={cardsData[10].text} />
           <Card  image={cardsData[11].image} text={cardsData[11].text} />
          </div>
          <div className="flex space-x-5 mt-5">
           <Card  image={cardsData[12].image} text={cardsData[12].text} />
           <Card  image={cardsData[13].image} text={cardsData[13].text} />
           <Card  image={cardsData[14].image} text={cardsData[14].text} />
          </div>
          
        </section>
        <section className="p-50 pl-100">
          <h1 className="text-black text-9xl w-100">HUNBLE</h1>
          <div className="flex">
            <h1 className="text-black text-9xl w-100 p-0 mb-4">BRAG</h1>
              <p className="text-black mt-16 w-50">I WON SOME AWARDS ALONG THE WAY</p>
          </div>
        </section>
        <MyImage image={cardsData[15].image} width={2100} height={30} />    
        <section className="ml-50 mt-40">
          <hr />
          <MyTAble text="HOUSTON EXPONENTIAL" text2="AWWWARDS" text3="HONORS" text4="2022"></MyTAble>
          <hr />
          <MyTAble text="HOUSTON EXPONENTIAL" text2="CSS DESIGN AWARDS" text3="UI/UX INNOVATION" text4="2022"></MyTAble>
          <hr />
          <MyTAble text="ATOMLE" text2="AWWWARDS" text3="NOMINEE" text4="2021"></MyTAble>
          <hr />
          <MyTAble text="ATOMLE" text2="CSS DESIGN AWARDSDS" text3="UI/UX INNOVATION" text4="2021"></MyTAble>
          <hr />
          <MyTAble text="THIN REEL MEDIA" text2="AWWWARDS" text3="NOMINEE" text4="2021"></MyTAble>
          <hr />
          <MyTAble text="THIN REEL MEDIA" text2="CSS DESIGN AWARDSDS" text3="UI/UX INNOVATION" text4="2022"></MyTAble>
        </section> 
      </main>
    </div>
  );
}
