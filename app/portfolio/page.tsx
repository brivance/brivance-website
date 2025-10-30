import Link from "next/link";

export default function Portfolio() {
  return (
    <div className={`bg-yellow w-full min-h-screen`}>
      <div className="flex flex-col w-5/7 pt-32 min-h-[70vh] items-center text-lg">
        <div>
          Here are some websites I have designed and developed for clients:
        </div>
        <Link href="https://www.bayonetbattalion.com" className="mt-20 ml-20 underline">
          www.bayonetbattalion.com
        </Link>
        <Link href="https://www.selfpetitionpro.com" className="mt-20 ml-20 underline">
          www.selfpetitionpro.com
        </Link>
      </div>
    </div>

  );
}