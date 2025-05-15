import ExternalLinkHoverEffect from "@components/ExternalLinkHoverEffect";
import Image from "next/image";
import { ImageHoverBlur } from "@components/cards/ImageHoverBlur";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center pt-15 mx-[5%] pb-20 gap-24">
        <div className="bg-[url('/personal-pics/sparkle-bg.png')] relative w-full h-auto bg-cover bg-center flex flex-col items-center justify-center shadow-2xl rounded-sm">
          <div className="text-8xl text-white mt-20">Brianna Vance</div>
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
                  className="transition-transform duration-300 hover:scale-110 px-3 py-1 bg-[#7493B5] text-white rounded-md">
                  contact me
                </a>
                <a href="https://www.linkedin.com/in/brivance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110 px-3 border-4 border-[#7493B5] text-[#7493B5] bg-gray-100 rounded-md">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-32 text-xl">
          <ExternalLinkHoverEffect text="Github" href="https://github.com/brivance" className="text-2xl" />
          <ExternalLinkHoverEffect text="LinkedIn" href="https://www.linkedin.com/in/brivance/" className="text-2xl" />
        </div>
      </div>
      <hr className="mx-9 text-gray-300 " />
      <div>
        <p className="text-center mt-28 mb-9 text-2xl">A few of my interests</p>
        <div className="grid grid-flow-col auto-cols-max mx-auto gap-x-10 pb-28 w-fit">
          <ImageHoverBlur src="/interests/climbing.jpg" width={300} height={365} title="ROCK CLIMBING" className="shadow-lg" />
          <ImageHoverBlur src="/interests/ice-cream.jpg" width={300} height={398} title="MAKING ICE CREAM" className="shadow-lg" />
          <ImageHoverBlur src="/interests/keys-piano.jpg" width={300} height={373} title="PIANO BY EAR" className="shadow-lg" />
        </div>
      </div>
    </>
  );
}
