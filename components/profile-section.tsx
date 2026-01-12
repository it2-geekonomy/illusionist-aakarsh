'use client';

import { H5, Strong } from './typography/typography';
import Image from 'next/image';

export default function ProfileSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/profile.pdf';
    link.download = 'profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="w-full bg-black">
      <div className="w-full flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="w-full lg:w-[55%] relative aspect-4/3 md:aspect-auto md:h-[600px] lg:h-[750px] xl:h-[1000px] 2xl:h-[850px]">
          <Image
            src="/aboutus.webp"
            alt="Aakarsh - Illusionist"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 bg-black flex flex-col justify-start pt-6 lg:pt-0 pb-6 px-6 md:pb-8 md:px-8 lg:pb-12 lg:px-8 xl:pb-16">
          <div className="space-y-6">
            <H5 className="text-white text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed text-justify">
              He has performed across <Strong>10+ countries</Strong> and appeared on various television shows. He has{' '}
              <Strong>"mesmerised corporates and celebs across India."</Strong> He won the <Strong>"Illusionist of the Year"</Strong> award for excellence and innovation in Magic & Mentalism. He has performed <Strong>five times</Strong> for the Ambani family's private events. Other celebrities who witnessed his magic include <Strong>Sachin Tendulkar, Anil Kapoor, Gautham Adani & family, Yash, Disha Patani, and Puneeth Rajkumar</Strong>. His close-up magic and stage mentalism shows are described as{' '}
              <Strong>"intellectual, interactive, witty & skilfully crafted, suiting the likings of corporates, HNIs & intellectual audience in general."</Strong>
            </H5>

            {/* Download Profile Button */}
            <div className="pt-4 md:pt-6 lg:pt-2 xl:pt-6 text-center">
              <button 
                onClick={handleDownload}
                className="bg-[#FFD700] text-black font-bold px-8 py-3 md:py-4 rounded-3xl text-[clamp(0.875rem,1.2vw,1rem)] hover:bg-[#FFC700] transition-colors"
              >
               <H5> Download Profile </H5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

