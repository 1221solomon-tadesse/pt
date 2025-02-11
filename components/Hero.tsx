import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/MagicButton"
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import profile from "@/app/assets/sol.jpg";

const Hero = () => {
  return (
    <div className="py-20">
      <Spotlight />
      <div className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-pulse opacity-30"></div>
        <div className="absolute inset-0 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] pointer-events-none"></div>
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <div className="absolute w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 top-1/3 left-1/4"></div>
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-1/3 right-1/4"></div>
        <div className="justify-center relative my-20 z-20 grid lg:grid-cols-2 ">
          <div className="flex flex-col items-center">
            <Image
              src={profile}
              alt="sol-profile"
              className="rounded-full"
              width={300}
              height={300}
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white ">
              Hi! I&apos;m Solomon Tadesse, Full-stack developer.
            </p>
          </div>
          <div className="flex flex-col w-full">
            <TextGenerateEffect
              words="Transforming Concepts into Seamless User Experiences"
              className="text-start lg:text-[50px] text-2xl "
            />
            <a href="#about">
              <MagicButton
              title="Show my work" icon={<FaLocationArrow />}
              position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
