import { ArrowOutward } from "@public/icons/ArrowOutward";
import Image from "next/image";
import { useState } from "react";

export default function ChordGenerator() {

  const [activeTab, setActiveTab] = useState("Model");

  const tabs = ["Model", "Database", "Next Steps"];

  const renderContent = () => {
    switch (activeTab) {
      case "Model":
        return (
          <div className="flex gap-5 items-center">
            <Image src="/projects/transformer_gif.gif" width={350} height={175} alt="Transformer GIF" />
            <div className="flex flex-col gap-5">
              <div>
                The code built almost completely from scratch, trained on chords from Ultimate Guitar.
              </div>
              <div>
                I chose a transformer model for its proven ability to generate coherent language sequences.
                Since sentences are sequential in nature, I believed the model would also perform well with chord sequences,
                which share similar sequential characteristics.
              </div>
            </div>
          </div>
        );
      case "Database":
        return (
          <div className="flex flex-col gap-8 test-center items-center">
            <div>
              I first needed a dataset. It was hard to find one online, so I created a web scraper to scrape chords
              from Ultimate Guitar. My dataset has over 1100 songs. Here is an example of a song from the dataset:
            </div>
            <Image src="/projects/song_chords_example.jpg" width={1500} height={175} alt="Example dataset" />
            <div>
              Then I coded the architecture of a transformer model and trained it on my data. This included
              preparing the data and vocabulary, refining the model parameters, and improving accuracy.
            </div>
          </div>
        );
      case "Next Steps":
        return (
          <div className="flex flex-col items-start gap-3 ml-[10%]">
            <div className="flex gap-3 items-center">
              <div className="bg-blue py-1 px-3 text-white">
                1.
              </div>
              <div>
                Refine chord outputs through refining model parameters, and dataset.
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-blue py-1 px-2.5 text-white">
                2.
              </div>
              <div>
                Create a more precise metric beyond my own evaluation of sound.
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col justify-center w-3xl mx-auto">
      <div className="mx-auto text-dark-blue font-medium text-5xl pb-7">
        Chord Generator
      </div>
      <div className="text-lg mx-auto flex text-center mb-[4%]">
        A transformer, trained on musical chord progressions of 1,000 songs. It&apos;s purpose is to give you
        chord sequence suggestions.
      </div>
      <div className="ml-[15%] px-[1%] py-[0.5%] flex justify-start w-2/3 bg-secondary-pink rounded-sm border border-secondary-pink">
        Tools: BeautifulSoup & Selenium Web Driver (for web scraping), Torch, Numpy, Sklearn, Transformers
      </div>
      <a
        href="https://github.com/brivance/chord-generator"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-end items-center hover:bg-blue-hover -mt-[2.25%] ml-auto mr-[15%] mb-[5%] gap-2 text-center text-xl px-[1%] py-[0.25%] bg-blue text-white border-blue rounded-sm">
        <div>Github Repository</div>
        <ArrowOutward className="h-4 w-4" />
      </a>
      <div>
        <div className="flex justify-center gap-4 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 text-lg mb-[4%] py-2 border-b-2 font-medium transition-all duration-500 ${activeTab === tab
                ? "bg-light-blue border border-light-blue rounded-md text-blue"
                : "border-transparent hover:text-blue hover:font-extrabold cursor-pointer"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="min-h-[350px] px-8 mt-4 text-center mb-[20%]">{renderContent()}</div>
      </div>
    </div>
  );
}