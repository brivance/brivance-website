import ExternalLinkHoverEffect from "@components/ExternalLinkHoverEffect";
import FunLinkCard from "@components/cards/FunLinkCard";
import Image from "next/image";
import { ImageHoverBlur } from "@components/cards/ImageHoverBlur";

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center pt-36 pb-20 gap-24">
        <div className="flex gap-28">
          <div className="self-center border-b-4 border-r-4 border-blackish rounded-full p-1.5">
            <Image src="/personal-pics/main-profile.jpeg" alt="grad pic" style={imageStyle} width={200} height={200} />
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <p className="text-7xl">Brianna Vance</p>
            <p className="text-xl ml-1">Full Stack Developer</p>
          </div>
        </div>
        <div className="flex gap-32 text-xl">
          <ExternalLinkHoverEffect text="Github" href="https://github.com/brivance" className="text-2xl" />
          <ExternalLinkHoverEffect text="LinkedIn" href="https://www.linkedin.com/in/brivance/" className="text-2xl" />
        </div>
      </div>
      <hr className="mx-9 text-gray-300 " />
      <div>
        <p className="text-center mt-28 mb-9 text-2xl">A few fun links...</p>
        <div className="grid grid-cols-2 gap-28 w-4/7 mx-auto mb-28">
          <FunLinkCard title="Kanye West Tweets" description="Discover Kanye's educational tweets" image="/fun-links/kanye-west.jpeg" href="https://oldbrivance.netlify.app/fun-links/kanye-tweets/index.html/" />
          <FunLinkCard title="Weather App" description="View the weather in your favorite city" image="/fun-links/weather-forecast.jpg" href="https://oldbrivance.netlify.app/fun-links/weather-proj/index.html/" />
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
