import { ArrowOutward } from "../public/icons/ArrowOutward";
import Image from "next/image";
// import { ImageHoverBlur } from "./components/cards/ImageHoverBlur";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center mx-[5%] pb-20 gap-16">
        <div className="bg-[url('/personal-pics/sparkle-bg.png')] relative w-full h-auto bg-cover bg-center flex flex-col items-center justify-center shadow-2xl rounded-sm">
          <div className="flex gap-28">
            <Image src="/personal-pics/floating-self.png" width={350} height={175} alt="Brianna Vance" />
            <div className="flex flex-col justify-center gap-15">
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
        <div className="flex gap-32 text-xl">
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
      {/* <hr className="mx-9 text-gray-300 " /> */}
      {/* <div>
        <p className="text-center mt-28 mb-9 text-2xl">A few of my interests</p>
        <div className="grid grid-flow-col auto-cols-max mx-auto gap-x-10 pb-28 w-fit">
          <ImageHoverBlur src="/interests/climbing.jpg" width={300} height={365} title="ROCK CLIMBING" className="shadow-lg" />
          <ImageHoverBlur src="/interests/ice-cream.jpg" width={300} height={398} title="MAKING ICE CREAM" className="shadow-lg" />
          <ImageHoverBlur src="/interests/keys-piano.jpg" width={300} height={373} title="PIANO BY EAR" className="shadow-lg" />
        </div>
      </div> */}
    </>
  );
}
