import { H3, H2, H5 } from './typography/typography';

export default function About() {
  return (
    <section className="w-full bg-black flex items-center justify-center p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="w-full 2xl:mx-[clamp(3rem,3vw,16rem)] flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        {/* Left Side - Title Section */}
        <div className="flex flex-row md:flex-col shrink-0 items-center justify-center md:justify-start md:items-start 2xl:mx-10 w-full md:w-auto gap-2 md:gap-0">
          <H2 className="text-[clamp(1.5rem,4vw,3.5rem)]! md:text-[clamp(1.8rem,5vw,4.2rem)]! font-bold leading-none text-[#FFD900] text-center md:text-left whitespace-nowrap">
            ABOUT
          </H2>
          <H3 className="text-[clamp(1.5rem,4vw,3.5rem)]! md:text-[clamp(1rem,3vw,2.9rem)]! font-bold leading-none text-[#FFD900] text-center md:text-left whitespace-nowrap">
            AAKARSH
          </H3>
        </div>

        {/* Vertical Separator Line */}
        <div className="bg-white shrink-0 hidden md:block w-[3px] h-[clamp(220px,20vh,250px)] lg:h-[clamp(290px,30vh,350px)] min-h-[150px]" />

        {/* Right Side - Content Section */}
        <div className="flex-1 2xl:mr-[clamp(2rem,2vw,16rem)]">
          <H5 className="text-white max-w-full text-justify md:leading-tight ">
            Aakarsh a.k.a Axe, a software engineer by qualification, started performing street magic in his hometown - Mangalore back in 2005. After engineering, he worked for a year as a software developer until an international opportunity came knocking his door! His hobby turned into a full fledged career when he was hired as a close up magician in Carnival Cruise Lines, USA. From then on, there was no looking back!
          </H5>
        </div>
      </div>
    </section>
  );
}

