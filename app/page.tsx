import { ArrowOutward } from "../public/icons/ArrowOutward";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center mx-[5%] pb-8 md:pb-20 gap-16">
        <div className="hidden md:flex bg-[url('/personal-pics/sparkle-bg.png')] relative w-full h-auto bg-cover bg-center flex-col items-center justify-center shadow-2xl rounded-sm">
          <div className="flex justify-center lg:gap-[8%] w-full">
            <Image src="/personal-pics/floating-self.png" width={350} height={175} className="pt-[5%] ml-[3%]" alt="Brianna Vance" />
            <div className="flex flex-col justify-center gap-[10%]">
              <div className="flex flex-col text-white text-5xl">
                <div>Got an idea?</div>
                <div>Let&apos;s make it happen.</div>
              </div>
              <div className="flex gap-5 text-2xl">
                <a href="mailto:brievance3@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110 px-3 py-1 bg-blue text-white rounded-md">
                  contact me
                </a>
                <a href="/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110 px-3 border-4 border-blue text-blue bg-gray-100 rounded-md">
                  see my work
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden pt-[13%] flex bg-[url('/personal-pics/sparkle-bg.png')] relative w-full h-3/4 bg-cover bg-center flex-col items-center justify-center shadow-2xl rounded-sm">
          <div className="flex justify-center w-full">
            <div className="flex flex-col gap-14 pl-[8%] pr-[6%]">
              <div className="flex flex-col mt-[25%] text-white font-bold">
                <div className="text-[clamp(2.5rem,10vw,3rem)]">Got an idea?</div>
                <div className="text-[clamp(1rem,8vw,2rem)] -mt-[2%] whitespace-nowrap">Let&apos;s make it happen.</div>
              </div>
              <div className="flex relative overflow-visible">
                <div className="z-10 flex flex-col justify-center items-start gap-5 text-2xl mb-[25%] whitespace-nowrap">
                  <a href="/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 text-center hover:scale-110 px-2 border-4 border-blue text-blue bg-gray-100 rounded-md">
                    see my work
                  </a>
                  <a href="mailto:brievance3@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110 px-2 py-1 bg-blue text-white rounded-md text-center">
                    contact me
                  </a>
                </div>
                <div className="z-0">
                  <Image src="/personal-pics/floating-self.png" width={200} height={175} alt="Brianna Vance" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 md:gap-32 text-xl">
          <div className="flex gap-0.5 items-center group">
            <a
              className="hover:text-[#879dac] text-2xl"
              href="https://github.com/brivance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <div className="opacity-0 scale-0 origin-bottom-left transition-transform duration-800 group-hover:opacity-50 group-hover:scale-100">
              <ArrowOutward className="h-4 w-4" />
            </div>
          </div>
          <div className="flex gap-0.5 items-center group">
            <a
              className="hover:text-[#879dac] text-2xl"
              href="https://www.linkedin.com/in/brivance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <div className="opacity-0 scale-0 origin-bottom-left transition-transform duration-800 group-hover:opacity-50 group-hover:scale-100">
              <ArrowOutward className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
