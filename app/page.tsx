import Image from "next/image";


export default function Home() {
  return (
    <div className="flex  min-h-screen bg-zinc-50  " >
      <main className=" w-screen  py-5 px-16 ">
        <header className="flex justify-between ">
          <Image
            src="/623ca195326c5501baa2d2ec_Ethan-Suero-logo.svg.png"
            alt="Next.js logo"
            width={100}
            height={30}
            className="object-contain"
            priority
          />
          <div className="flex space-x-8 text-sm font-medium ">
            <h1 className="mt-4 text-gray-900">HOME</h1>
            <h1 className="mt-4 text-gray-900">WORK</h1>
            <h1 className="mt-4 text-gray-900">CONTACT</h1>
            <h1 className=" text-center bg-black p-3.5 px-5 rounded-xl text-white mt-0">SCHEDULE A CALL</h1>
          </div>
        </header>
        <section className=" mt-20 ">
          <div className="ml-120">
            <Image
              src="/div.png"
              alt="Next.js logo"
              width={900}
              height={30}
              className="object-contain"
              priority
            />
          </div>
        </section>
        <section>
          <h1 className="mt-40 text-gray-900 ml-220 text-xs">WORK SEEN ON</h1>
          <div className="mt-10 ml-120">
            <Image
              src="/div-2.png"
              alt="Next.js logo"
              width={900}
              height={60}
              className="object-contain"
              priority
            />
          </div>
        </section>
        <section>
          <div className="mt-60 ml-120">
            <Image
              src="/div-3.png"
              alt="Next.js logo"
              width={900}
              height={60}
              className="object-contain"
              priority
            />
          </div>
        </section>
        <section>
          <div className="mt-130  flex justify-between pr-20">
            <div className="text-left p-20 text-black">
              <h1 className="text-3xl">HOUSTON EXPONENTIAL</h1>
              <p className="w-70 pl-10">A new digital HUB for houston’s biggest startup ecosystem.</p>
            </div>
             <Image
              src="/div-4.png"
              alt="Next.js logo"
              width={600}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-60  flex flex-row-reverse justify-between pr-20 pl-20">
            <div className="text-left p-20 text-black w-160 pl-30">
              <h1 className="text-3xl">NAMI ML</h1>
              <p className="w-70 pl-10">A brand new digital identity and website for the subscription App service that focuses on happy subscribers.</p>
            </div>
             <Image
              src="/div-5.png"
              alt="Next.js logo"
              width={600}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-60  flex justify-between pr-20">
            <div className="text-left p-20 text-black">
              <h1 className="text-3xl">THIN REEL</h1>
              <p className="w-70 pl-10">How we turned a local studio into one of the biggest video agencies in the south of the UK</p>
            </div>
             <Image
              src="/div-6.png"
              alt="Next.js logo"
              width={600}
              height={60}
              className="object-contain"
              priority
            />
          </div>
        </section>
        <section className="mt-60 flex space-x-70">
          <h1 className="text-black">MORE PROJECTS</h1>
          <Image
              src="/div-7.png"
              alt="Next.js logo"
              width={900}
              height={60}
              className="object-contain"
              priority
            />
        </section>
        <section className="mt-50 pl-120">
          <Image
              src="/div-8.png"
              alt="Next.js logo"
              width={900}
              height={60}
              className="object-contain"
              priority
            />
        </section>
        <section className="mt-30 p-10">
          <div className="flex space-x-5">
            <div className="w-100 p-5 border-black border-2 h-130 pt-90">
              <Image
                src="/div-9.png"
                alt="Next.js logo"
                width={400}
                height={60}
                className="object-contain"
                priority
              />
              <h1 className="text-black text-xl w-93 mt-5">Live workshop where we define the main problems and challenges before building a strategic plan moving forward.</h1>
            </div>
            <div className="w-100 p-5 border-black border-2 h-130 pt-90">
              <Image
                src="/div-10.png"
                alt="Next.js logo"
                width={400}
                height={60}
                className="object-contain"
                priority
              />
              <h1 className="text-black text-xl w-93 mt-5">Competitive & Market research with the aim of finding that sweet spot that will set your brand apart.</h1>
            </div>
            <div className="w-100 p-5 border-black border-2 h-130 pt-90">
              <Image
                src="/div-11.png"
                alt="Next.js logo"
                width={400}
                height={60}
                className="object-contain"
                priority
              />
              <h1 className="text-black text-xl w-93 mt-5">Here’s where your digital product starts to become a tangible thing with visual elements and a great UX design.</h1>
            </div>
          </div>
          <div className="flex space-x-5 mt-5">
            <div className="w-100 p-5 border-black border-2 h-130 pt-90">
              <Image
                src="/div-12.png"
                alt="Next.js logo"
                width={400}
                height={60}
                className="object-contain"
                priority
              />
              <h1 className="text-black text-xl w-93 mt-5">Using Webflow, a no-code tool that allow us full creative development & is easy to manage by your team after launch.</h1>
            </div>
            <div className="w-100 p-5 border-black border-2 h-130 pt-90">
              <Image
                src="/div-13.png"
                alt="Next.js logo"
                width={400}
                height={60}
                className="object-contain"
                priority
              />
              <h1 className="text-black text-xl w-93 mt-5">How to update and maintain your new digital product in minutes using no-code tools that are easy to use.</h1>
            </div>
            <div className="w-100 p-5 border-black border-2 h-130 pt-90">
              <Image
                src="/div-14.png"
                alt="Next.js logo"
                width={400}
                height={60}
                className="object-contain"
                priority
              />
              <h1 className="text-black text-xl w-93 mt-5">Live workshop where we define the main problems and challenges before building a strategic plan moving forward.</h1>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
}
