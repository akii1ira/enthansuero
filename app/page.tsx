import Card from "./image";
import { cardsData } from "./data/cardsData";
import MyImage from "./img";
import CardBox from "./box";
import MyTAble from "./table";
import { ProjectNames } from "./data/cardsData";
import { NineBoxes } from "./data/cardsData";
import { ThemeSwitcher } from "./components/theme-switcher"
import { Button } from "../components/ui/button"
import { Key } from "react";

interface NavLink {
  label: string;
  id: string;
  href: string;
  style?: string;

}

interface HeaderData {
  logo?: any;
  navLinks?: NavLink[];
  docs?: any;
  number?: number;
  name?: string;
  description?: string;
  text?: string;
}
const API = process.env.NEXT_PUBLIC_API_URL;
async function getProjects() {
  const res = await fetch(`${API}/api/globals/header-settings`, {
    cache: "no-store",
  });

  return res.json();
}
async function getProjects2() {
  try {
    const res = await fetch(`${API}/api/media`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) return null;

    return await res.json();
  } catch (e) {
    console.error("MEDIA API ERROR", e);
    return null;
  }
}
async function getProjects3() {
  try {
    const res = await fetch(`${API}/api/projects`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) return null;

    return await res.json();
  } catch (e) {
    console.error("MEDIA API ERROR", e);
    return null;
  }
}


export default async function Home() {
  const data: HeaderData = await getProjects();
  const item = await getProjects2();
  const item2 = await getProjects3();
  const media = item?.docs ?? [];
  const project = item2?.docs ?? [];
  const nav = data.navLinks || [];
  return (
    <div className="flex  min-h-screen bg-zinc-50 dark:bg-neutral-900 " >
      <main className=" w-screen  py-5 px-16 ">
        <header className="flex ">
          <MyImage image={data.logo?.url} width={150} height={30} alt="Logo" />
          <div className="flex space-x-8 text-sm font-medium ml-150 ">
            {nav.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                className={`${link.style}`}
              >
                {link.label}
              </Button>
            ))}
            <ThemeSwitcher />
          </div>
        </header>
        {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
        <section className="mt-20 ">
          <div className="ml-120 flex">
            <div className="w-150"> <h1 className="text-9xl font-medium leading-[0.8]">STUNNING BRANDS & DIGITAL</h1></div>
            <p className="text-gray-900 text-2xl mt-80 leading-6 tracking-wide font-medium dark:text-white">FREELANCER DIGITAL DESIGNER WEBFLOW EXPERT</p>
          </div>
          <h1 className="text-gray-900 text-9xl font-medium ml-120 leading-[0.8] dark:text-white">EXPERIENCES</h1>
        </section>
       {/* {media.map((mediaItem: { id: Key | null | undefined; url: string | null | undefined; filename: string | undefined; }) => (
          <div key={mediaItem.id} className="mt-20 ml-120">
            <MyImage image={mediaItem.url} width={900} height={60} alt={mediaItem.filename} />
          </div>
        ))} */}
        <section>
          <h1 className="mt-40 text-gray-900 ml-220 text-xs dark:text-white">WORK SEEN ON</h1>
          <div className="mt-10 ml-120">
            <MyImage image={media[0]?.url} width={900} height={60} />
          </div>
        </section>
        <section>
          <div className="mt-60 flex">
            <h1 className=" h-10 ml-126 mt-2 font-medium">ABOUT</h1>
              <h1 className="text-5xl tracking-wider pl-20">Ethan Suero is an independent </h1>
          </div>
          <h1 className="text-5xl tracking-wider mr-40 ml-110 w-200">designer focused on crafting immersive digital experiences. He believes every project is an opportunity to deliver a unique and memorable digital experience that
delights users and builds brand equity.</h1>
        </section>
        <section>
          <CardBox text="mt-130  flex justify-between pr-20" text2="text-left p-20 text-black dark:text-white" text3="HOUSTON EXPONENTIAL" text4={cardsData[4].text} image={media[6]?.url}  />
          <CardBox text="mt-60  flex flex-row-reverse justify-between pr-20 pl-20" text2="text-left p-20 text-black w-160 pl-30 dark:text-white" text3="NAMI ML" text4={cardsData[5].text} image={media[7]?.url}  />
          <CardBox text="mt-60  flex justify-between pr-20" text2="text-left p-20 text-black dark:text-white" text3="THIN REEL" text4={cardsData[6].text} image={media[8]?.url}/>

        </section>
        <section className="mt-60 flex space-x-70">
          <h1 className="text-black dark:text-white">MORE PROJECTS</h1>
          <div>
            {ProjectNames.map((project) => (
              <div key={project.id}>
                <hr />
                <h1 className="text-black dark:text-white font-medium hover:text-blue-900 cursor-pointer mb-5 mt-5 text-8xl ml-10">
                  {project.name}
                </h1>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-50">
          <h1 className="text-gray-900 dark:text-white text-9xl font-medium ml-120 leading-[0.8]">THOUGHTFUL</h1>
          <div className="ml-120 flex">
            <div className="w-150"> <h1 className="text-9xl font-medium leading-[0.8]">PROCESS</h1></div>
            <p className="text-gray-900 dark:text-white mt-18 leading-6 tracking-normal font-medium">I THINK A LOT</p>
          </div>
        </section>
        <section className="mt-30 p-10">
          <div className="flex space-x-5">
            {project.slice(0, 3).map((box: { id: Key | null | undefined; number: number; name: string; description: string; }) => (
              <Card key={box.id} num={box.number} name={box.name} text={box.description}  />
            ))}
          </div>
          <div className="flex space-x-5 mt-5">
            {project.slice(3, 6).map((box: { id: Key | null | undefined; number: number; name: string; description: string; }) => (
              <Card key={box.id} num={box.number} name={box.name} text={box.description} />
            ))}
          </div>
         
        </section>
        <section className="p-50 pl-100">
          <h1 className="text-black dark:text-white text-9xl w-100">HUNBLE</h1>
          <div className="flex">
            <h1 className="text-black dark:text-white text-9xl w-100 p-0 mb-4">BRAG</h1>
              <p className="text-black dark:text-white mt-16 w-50">I WON SOME AWARDS ALONG THE WAY</p>
          </div>
        </section>
        <MyImage image={media[9]?.url} width={2100} height={30} />    
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
        <section className="border-2  border-black mt-100">
          <div className=" flex text-black dark:text-white space-x-30 px-10 py-8">
            
            <h1><span className="font-bold">NAME:</span> FRAZER HURREL</h1>
            <h1><span className="font-bold">ROLE:</span> CREATIVE TECHNOLOGIST</h1>
            <h1><span className="font-bold">COMPANY:</span> YAHOO!</h1>
            <h1><span className="font-bold">PROJECT:</span> BRITISH AIRWAYS</h1>
          </div>
          <div className="flex border-t-2 border-black dark:border-white p-5">
            <MyImage image={media[4]?.url} width={500} height={30} />    
            <div className="w-200 px-20 py-10">
              <MyImage image={media[3]?.url} width={80} height={30} />   
              <h1 className="text-2xl text-black dark:text-white mt-10">{cardsData[3].text}</h1>
            </div>
          </div>
          <div className="flex  px-10 py-2 text-black dark:text-white justify-between border-t-2 border-black dark:border-white">
            <MyImage image={media[1]?.url} width={100} height={30} />
            <h1 className="mt-7">01/04</h1>
            <MyImage image={media[2]?.url} width={100} height={30} />    
          </div>
        </section>
        <h1 className="ml-120 mt-50 text-black dark:text-white pb-10">WORKED WITH SOME OF THE BEST OUT THERE</h1>
        <MyImage image={media[5]?.url} width={1300} height={30} />    
        <section className="text-black dark:text-white pl-90 mt-50 mb-50">
          <div className="flex">
            <h1 className="text-9xl">COMMON</h1>
            <div className="w-50 mt-16">
              <h1>SOME QUESTIONS PEOPLE USUALLY ASK</h1>
            </div>
          </div>
          <h1 className="text-9xl">QUESTIONS</h1>
          
        </section>
      </main>
    </div>
  );
}
